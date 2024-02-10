import "./SectionHeader.scss";

function SectionHeader(props) {
    return (
        <section className="section-heading">
            <h1 className="section-heading__text">{props.sectionHeading}</h1>
        </section>
    )
}

export default SectionHeader;