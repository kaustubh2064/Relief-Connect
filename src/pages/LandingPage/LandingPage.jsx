import './LandingPage.scss';

import HeroBanner from '../../components/HeroBanner/HeroBanner';
import DisasterList from '../../components/DisasterList/DisasterList';
import Mission from '../../components/Mission/Mission';
import Support from '../../components/Support/Support';

import { useEffect } from 'react';

function LandingPage({ disasterData }) {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])


    return (
        <>
            <HeroBanner />
            <DisasterList disasterData={disasterData} />
            <Mission />
            <Support />
        </>
    )
}

export default LandingPage;
