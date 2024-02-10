import './PhotoModal.scss';
import closeX from '../../assets/icons/closingX-white.svg';

function PhotoModal({ photoUrl, show, setShow }) {
    if (!show) return null;

    return (
        <div className="photo-modal">
            <img src={closeX}
                alt="close x icon" className='photo-modal__close'
                onClick={() => setShow(false)} />
            <div className="photo-modal__content">
                <img src={photoUrl}
                    className="photo-modal__img"
                    alt="photo of disaster"
                />
            </div>
        </div>
    )
}

export default PhotoModal;