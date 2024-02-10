import "./Footer.scss";
import FacebookIcon from "../../assets/icons/facebook.svg";
import XTwitterIcon from "../../assets/icons/Xtwitter.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__link-container">
                <span className="footer__link">Careers | Contact Us | Terms of Use</span>
                <span className="footer__link">Privacy Policy | Accessibility Policy</span>
            </div>
            <div className="footer__icon-container">
                <img src={FacebookIcon} alt="facebook icon" />
                <img src={XTwitterIcon} alt="xtwitter icon" />
                <img src={InstagramIcon} alt="instagram icon" />
            </div>
        </footer>
    )
}

export default Footer;