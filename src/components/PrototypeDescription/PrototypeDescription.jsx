import './PrototypeDescription.scss';
import githubIcon from '../../assets/icons/github.svg'

function PrototypeDescription() {

    return (
        <div className='prototype-description'>
            <a href="https://github.com/anagelberg/crisis-response" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="github icon" />
            </a>
        </div>

    )

}

export default PrototypeDescription;