import { useState } from 'react';
import PhotoModal from '../PhotoModal/PhotoModal';
import './PostPhoto.scss'

function PostPhoto({ photoUrl, modal }) {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className='post-photo'>
            {photoUrl
                && <
                    img src={photoUrl}
                    onClick={() => modal && setShowModal(true)}
                    className="post-photo__img"
                    alt="photo of disaster"
                />
            }

            <PhotoModal show={showModal}
                photoUrl={photoUrl}
                setShow={setShowModal} />

        </div>
    )
};

export default PostPhoto;