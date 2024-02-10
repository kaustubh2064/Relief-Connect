import "./DisasterDetailHero.scss";

import { useNavigate } from "react-router";

import Button from "../Button/Button";
import AlternateSectionHeader from "../AlternateSectionHeader/AlternateSectionHeader";

import ongoing from "../../assets/icons/ongoing.svg";
import recovery from "../../assets/icons/recovery.svg";

function DisasterDetailHero({ selectedDisaster }) {

    const navigate = useNavigate();

    return (
        <section className="disaster-detail-hero">
            <h3 className="disaster-detail-hero__disaster-name">{selectedDisaster?.name}</h3>
            <AlternateSectionHeader alternateSectionHeading={selectedDisaster?.location} modifier="--secondary" />

            <div className="disaster-detail-hero__map-container">
                <img src={`/images/maps/${selectedDisaster?.id}_map.svg`} alt="location on map"
                    className="disaster-detail-hero__map" />
                {selectedDisaster?.status === "ongoing" && <img src={ongoing} alt="ongoing" className="disaster-detail-hero__map-disaster-status" />}
                {selectedDisaster?.status === "recovery" && <img src={recovery} alt="recovery" className="disaster-detail-hero__map-disaster-status" />}
            </div>

            <div className="disaster-detail-hero__about-section">
                {selectedDisaster?.status === "ongoing"
                    ? <p>
                        <span>
                            <strong>
                                Started on:
                            </strong>
                            {` ${selectedDisaster?.startDateText}`}
                        </span>
                    </p>
                    : <p> <span><strong>Occurred: </strong></span>{selectedDisaster?.startDateText} - {selectedDisaster?.endDateText}</p>

                }
            </div>

            <div className="disaster-detail-hero__impact-section">
                <AlternateSectionHeader alternateSectionHeading="Impact" />

                <div className="disaster-detail-hero__impact-list">
                    {selectedDisaster?.impacts.map((impact, index) => {
                        return (
                            <div className="disaster-detail-hero__impact-1" key={index}>
                                <p className="disaster-detail-hero__impact-value">{impact.value}</p>
                                <p className="disaster-detail-hero__impact-metric">{impact.metric}</p>
                            </div>
                        )
                    })}

                </div>


            </div>
            <div className="disaster-detail-hero__button">
                <Button
                    modifier="--secondary"
                    text='donate now'
                    onClick={() => navigate(`/donate/${selectedDisaster?.type}`)}
                />
            </div>
        </section>
    )
}

export default DisasterDetailHero;