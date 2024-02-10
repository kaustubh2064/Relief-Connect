import './Avatar.scss';

function Avatar({ photoUrl, modifier }) {
    return (
        <div className={`avatar avatar${modifier}`}>
            <img className="avatar__img" src={photoUrl} alt="user profile" />
        </div>
    )
}

export default Avatar;