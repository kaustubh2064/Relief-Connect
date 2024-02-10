import DisasterCard from "../DisasterCard/DisasterCard";
import './DisasterList.scss';
import SectionHeader from "../SectionHeader/SectionHeader";
import sideArrow from "../../assets/icons/arrowRight.svg"

function DisasterList({ disasterData }) {

    // console.log(disasterData)

    return (
        <div className="disaster-list">

            <SectionHeader sectionHeading="Natural Disasters" />
            {disasterData.map((disaster) => <DisasterCard key={disaster.id} disaster={disaster} />)}

            <h4 className="disaster-list__see-all">See all natural disasters <img src={sideArrow} alt="side arrow" className="disaster-list__icon" /></h4>
        </div>
    )
}

export default DisasterList;