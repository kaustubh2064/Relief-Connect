import './RecoveryTip.scss';
import MinusIcon from "../../assets/icons/remove.svg";
import PlusIcon from "../../assets/icons/plus.svg";
import { useState } from 'react';

function RecoveryTip({ tip, last }) {

    const [collapsed, setCollapsed] = useState(true);

    return (
        <>
            <li className={`tip ${last && 'tip--last'}`}
            >
                <div className='tip__header' onClick={() => setCollapsed(prev => !prev)}>

                    <h4 className='tip__step'>{tip.stepTitle}</h4>
                    <img src={collapsed ? PlusIcon : MinusIcon} className='tip__plus-minus-icons' alt="plus minus icons" />
                </div>

                {!collapsed &&
                    <div className='tip__collapsed'>
                        {tip.stepContents.map((content, index) => {
                            return (
                                <p className='tip__substep' key={index}>
                                    <span className='tip__substep-name'>
                                        {`${content.substep}: `}
                                    </span>
                                    {content.substepDetail}
                                </p>
                            )
                        })}
                    </div>
                }


            </li >




        </>
    )
}

export default RecoveryTip;