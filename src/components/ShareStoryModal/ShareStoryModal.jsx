import './ShareStoryModal.scss';
import Button from '../Button/Button';
import uploadIcon from '../../assets/icons/upload.svg';
import Avatar from '../Avatar/Avatar';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PostPhoto from '../PostPhoto/PostPhoto';

function ShareStoryModal({ show, closeHandler, selectedDisaster, addExperienceComment }) {


    const [preview, setPreview] = useState([]);
    const [storyText, setStoryText] = useState('');
    const [needs, setNeeds] = useState({
        needsFood: false,
        needsClothing: false,
        needsHousing: false,
    })


    const submitHandler = (e) => {
        e.preventDefault();

        const newExperienceComment = {
            id: uuidv4(),
            userName: "Charles Mateus",
            userProfilePhoto: "/images/profile/CurrentUser.jpg",
            needsFoodAndWater: needs.needsFood,
            needsHousing: needs.needsHousing,
            needsClothing: needs.needsClothing,
            numComments: 0,
            photos: preview,
            comment: storyText,
            timestamp: Math.floor(Date.now() / 1000)
        }

        setPreview([]);
        setStoryText('');
        setNeeds({
            needsFood: false,
            needsClothing: false,
            needsHousing: false,
        })
        addExperienceComment(newExperienceComment, selectedDisaster.id);
        closeHandler();

    }


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files); // Convert FileList to Array
        const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];

        const validFiles = files.filter(file => validImageTypes.includes(file.type)).slice(0, 3); // Only take first 3 valid images

        if (validFiles.length > 0) {

            const fileReaders = validFiles.map(file => {
                const reader = new FileReader();
                return new Promise((resolve, reject) => {
                    reader.readAsDataURL(file);
                    reader.onloadend = () => resolve(reader.result);
                    reader.onerror = reject;
                });
            });

            Promise.all(fileReaders).then(results => {
                setPreview(results);
            });

        }
    };

    if (!show) return null;
    return (
        <div className="modal">
            <div className="modal__content">

                <div className="modal__header">
                    <Avatar photoUrl="/images/profile/CurrentUser.jpg" />
                    <h4>Charles Mateus</h4>
                    <p className="modal__close" onClick={closeHandler}>Cancel</p>
                </div>

                <form className="story-form" onSubmit={(e) => submitHandler(e)}>
                    <p className='story-form__attention'>* Mandatory Fields</p>
                    <div className='story-form__form-section'>
                        <label
                            // for='story-field'
                            className='story-form__label'>
                            <span
                                className='story-form__label story-form__label--mandatory'>
                                {`* `}
                            </span>
                            Share Your Story
                        </label>
                        <textarea
                            className='story-form__story-field'
                            placeholder="Share your personal experience here..."
                            value={storyText}
                            onChange={e => { setStoryText(e.target.value) }}
                        >

                        </textarea>
                    </div>
                    <div className="story-form__form-section">
                        <label className='story-form__label'>
                            Upload Images

                            <div className='story-form__upload-photo'>
                                <img src={uploadIcon}
                                    className="story-form__icon"
                                    alt="upload click" />
                                <input type="file" onChange={handleImageChange} multiple />

                                {preview.length > 0 &&
                                    <div className="story-form__photo-preview">
                                        {preview.map((photo, index) => <PostPhoto photoUrl={photo} key={index} modal={false} />)}
                                    </div>


                                }


                            </div>
                        </label>
                    </div>

                    <div className="story-form__form-section">
                        <label className='story-form__label'>Select your immediate needs</label>

                        <div className="story-form__checkboxes">
                            <div className='story-form__checkbox-field'>
                                <input
                                    type="checkbox"
                                    id='food-checkbox'
                                    value="needsFood"
                                    checked={needs.needsFood}
                                    onChange={() => {
                                        setNeeds(prev => {
                                            return { ...prev, needsFood: !prev.needsFood };
                                        })
                                    }}
                                ></input>
                                <label
                                    htmlFor="food-checkbox" className='story-form__checkbox-label'>Food & Water
                                </label>
                            </div>

                            <div className='story-form__checkbox-field'>
                                <input
                                    type="checkbox"
                                    id='housing-checkbox'
                                    value="needsHousing"
                                    checked={needs.needsHousing}
                                    onChange={() => {
                                        setNeeds(prev => {
                                            return { ...prev, needsHousing: !prev.needsHousing };
                                        })
                                    }}
                                ></input>
                                <label
                                    htmlFor="housing-checkbox" className='story-form__checkbox-label'>Temporary Housing
                                </label>
                            </div>
                            <div className='story-form__checkbox-field'>
                                <input
                                    type="checkbox"
                                    id='clothing-checkbox'
                                    value="needsClothing"
                                    checked={needs.needsClothing}
                                    onChange={() => {
                                        setNeeds(prev => {
                                            return { ...prev, needsClothing: !prev.needsClothing };
                                        })
                                    }}

                                ></input>
                                <label
                                    htmlFor="clothing-checkbox"
                                    className='story-form__checkbox-label'>
                                    Clothing & Personal Items
                                </label>
                            </div>
                        </div>

                    </div>
                    <Button text="Share your story" disabled={storyText.trim() === ''} />


                    <div className='story-form__artificial-space'></div>
                </form>





            </div >
        </div >
    )
}

export default ShareStoryModal;