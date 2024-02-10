import './GetHelpPage.scss';

import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import DisasterDetailHero from '../../components/DisasterDetailHero/DisasterDetailHero';
import RecoveryTips from '../../components/RecoveryTips/RecoveryTips';
import Button from '../../components/Button/Button';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ShareStoryModal from '../../components/ShareStoryModal/ShareStoryModal';
import ExperienceList from '../../components/ExperienceList/ExperienceList';


function GetHelpPage({ disasterData, addExperienceComment }) {

    const [showStoryModal, setShowStoryModal] = useState(false);

    const params = useParams();
    const navigate = useNavigate();

    const selectedDisaster = disasterData.find((disaster => disaster.id === params.id));


    useEffect(() => {   
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (!selectedDisaster) {
            navigate('/not-found');
        }
        // eslint-disable-next-line
    }, [params])

    return (
        <div className='get-help-page'>
            <DisasterDetailHero selectedDisaster={selectedDisaster} />
            <RecoveryTips type={selectedDisaster?.type} />


            <div className="get-help-page__support">
                <SectionHeader sectionHeading="Support impacted individuals" />
                <Button text="Share your story" onClick={() => setShowStoryModal(true)} />
                <ShareStoryModal
                    show={showStoryModal}
                    closeHandler={() => setShowStoryModal(false)}
                    addExperienceComment={addExperienceComment}
                    selectedDisaster={selectedDisaster}
                />
            </div>


            <ExperienceList experiences={selectedDisaster?.experiences} />


        </div>
    )
}


export default GetHelpPage;