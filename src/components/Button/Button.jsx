import "./Button.scss";
//TODO change styling appropriately
function Button({ modifier, text, icon, ...buttonAttributes }) {
    return (
        <button
            className={`button button${modifier}`}
            {...buttonAttributes}
        >
            {icon && <img src={icon}></img>}
            <div className="button__text">{text}</div>
        </button>
    );
}

export default Button;