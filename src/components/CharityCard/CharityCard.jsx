import './CharityCard.scss';
import Button from '../Button/Button';

function CharityCard({ charity }) {

    return (
        <div className="charity-card">
            <img src={charity?.logo} alt="charity logo" className="charity-card__img" />

            <h4 className='charity-card__organization-name'>{charity?.organization}</h4>

            <p className="charity-card__fund">{charity?.fund}</p>

            <Button
                text="Visit page"
                modifier="--secondary"
                onClick={() => window.open(charity?.link, "_blank")} />
        </div>
    )


}

export default CharityCard;