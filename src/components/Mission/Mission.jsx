import SectionHeader from "../SectionHeader/SectionHeader";
import "./Mission.scss";

function Mission() {
    return (
        <section className="mission">
            <SectionHeader sectionHeading="Our Mission" />
            <p className="mission__statement">We provide assistance globally to people affected by various crises and disasters. Our aim is to offer support and aid to those in need across the world, ensuring they receive help during difficult times.</p>
        </section>
    )
}

export default Mission;