import './ExperienceList.scss';
import ExperienceComment from '../ExperienceComment/ExperienceComment';

function ExperienceList({ experiences }) {
    return (
        <div className='comment-cards'>
            {
                experiences?.sort((a, b) => b.timestamp - a.timestamp)
                    .map(
                        (experience, index) => <ExperienceComment key={index} experience={experience} />
                    )}
        </div>
    )
}

export default ExperienceList;