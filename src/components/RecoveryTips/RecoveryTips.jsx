import SectionHeader from "../SectionHeader/SectionHeader";

import "./RecoveryTips.scss";
import tipData from '../../data/tips.json'
import { useEffect, useState } from "react";
import RecoveryTip from "../RecoveryTip/RecoveryTip";


function RecoveryTips({ type }) {

    const [tips, setTips] = useState(tipData[type])

    useEffect(() => {
        setTips(tipData[type])
    }, [type])


    return (
        <section className="recovery-tips">
            <SectionHeader sectionHeading={`${type} recovery tips`} />
            <ol className="recovery-tips__list">

                {tips?.map((tip, index) => <RecoveryTip
                    tip={tip}
                    key={index}
                    last={index === (tips.length - 1)} />)}

            </ol>
        </section>
    )
}

export default RecoveryTips;