import "./Support.scss";
import Button from "../Button/Button";
import AlternateSectionHeader from "../AlternateSectionHeader/AlternateSectionHeader";
import { useNavigate } from "react-router";

function Support() {
    const navigate = useNavigate();

    return (
        <section className="support">
            <AlternateSectionHeader alternateSectionHeading="Support Those Impacted" />
            {/* <h3 className="support__title">Support Those Impacted</h3> */}
            <span className="support__statement">Explore the different ways you can help those impacted by natural disasters within B.C.</span>
            <div className="support__button-container">
                <Button modifier="--secondary" text='donate us' onClick={() => navigate('#')} />
            </div>
        </section>
    )
}

export default Support;