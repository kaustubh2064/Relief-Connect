import './DisasterCard.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import ongoing from '../../assets/icons/ongoing.svg';
import recovery from '../../assets/icons/recovery.svg';

function DisasterCard({ disaster }) {
    const navigate = useNavigate();

    return (
        <div className='disaster-card'>
            <div className='disaster-card__img-container'>
                <img className='disaster-card__img' src={disaster.coverPhoto} alt="photo of disaster" />
                {disaster.status == "ongoing" && <img src={ongoing} alt="ongoing" className='disaster-card__status' />}
                {disaster.status == "recovery" && <img src={recovery} alt="recovery" className='disaster-card__status' />}
            </div>
            <div className='disaster-card__footer'>
                <div className='disaster-card__footer-text'>
                    <h4 className='disaster-card__name '>{disaster.name}</h4>
                    <div className='disaster-card__date'>
                        {disaster.status == "ongoing"
                            ? <p className='disaster-card__date'>
                                <span className='disaster-card__date--highlight'>
                                    Started on:
                                </span>
                                {` ${disaster.startDateText}`}
                            </p>
                            : <p>{disaster.startDateText} - {disaster.endDateText}</p>

                        }   </div>
                </div>

                <div className="disaster-card__buttons">

                    <Button text='Get help' onClick={() => navigate(`/gethelp/${disaster.id}`)} />
                    <Button text='Donate' modifier="--secondary" onClick={() => { navigate(`/donate/${disaster.type}`) }} />
                </div>
            </div>
        </div >
    )
}

export default DisasterCard;