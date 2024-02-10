import "./AlternateSectionHeader.scss";

function AlternateSectionHeader({ alternateSectionHeading, modifier }) {
    return (
        <h3 className={`alternate-section-heading alternate-section-heading${modifier}`}>{alternateSectionHeading}</h3>
    )
}

export default AlternateSectionHeader;