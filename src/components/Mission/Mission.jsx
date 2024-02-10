import SectionHeader from "../SectionHeader/SectionHeader";
import "./Mission.scss";

function Mission() {
    return (
        <section className="mission">
            <SectionHeader sectionHeading="Our Mission" />
            <p className="mission__statement">We empower natural disaster survivors in B.C. by connecting them directly with compassionate community members. We help by facilitating personalized, one-on-one support, ensuring survivors receive the care they need beyond traditional government relief programs.</p>
        </section>
    )
}

export default Mission;