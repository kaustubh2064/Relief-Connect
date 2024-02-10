import './DonatePage.scss';
import { useParams, useNavigate } from 'react-router-dom';
import CharityCard from '../../components/CharityCard/CharityCard';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEffect, useState } from 'react';
import ExperienceList from '../../components/ExperienceList/ExperienceList';
import charityData from '../../data/charities.json';

function DonatePage({ disasterData }) {

    const params = useParams();
    const navigate = useNavigate();

    const [type, setType] = useState(params.type);
    const [experiences, setExperiences] = useState();


    useEffect(() => {


        if (type === 'flood' || type === 'wildfire') {
            setType(params.type);
            setExperiences(
                disasterData
                    .filter(disaster => disaster.type === params.type)
                    .map(disaster => disaster.experiences)
                    .flat()
            );
        } else {
            navigate('/not-found')
        }


    }, [params])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])


    return (
        <div className='donate'>

            <div className='donate__header'>

                <SectionHeader
                    sectionHeading={`Contribute to charitable ${type} relief funds`}
                />

                <div className='donate__charity-cards'>

                    {
                        charityData
                            .filter(charity => charity.type === type)
                            .map((charity, index) => <CharityCard charity={charity} key={index} />)
                    }

                </div>

            </div>





            <SectionHeader
                sectionHeading={`Contribute to those affected by the situation.`}
            />

            <ExperienceList
                experiences={experiences}
            />


        </div>
    )
}

export default DonatePage;