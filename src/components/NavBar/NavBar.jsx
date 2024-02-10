import Avatar from "../Avatar/Avatar";
import menuIcon from '../../assets/icons/hamburger.svg';
import closeX from '../../assets/icons/closingX.svg';
import currentUserIcon from '../../assets/images/default-avatar.svg';

import "./NavBar.scss";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
    const [showContactInfo, setShowContactInfo] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="navbar">

            <div className="navbar__top">
                <div className="navbar__left">
                    <img
                        src={isOpen ? closeX : menuIcon}
                        alt="close X icon"
                        onClick={() => setIsOpen(prev => !prev)}
                        className="navbar__menu"
                    />
                    <p className="navbar__logo" onClick={() => navigate('/')}>Relief Connect</p>
                </div>
                <Avatar photoUrl="/images/profile/CurrentUser.jpg" modifier='--nav' />
            </div>

            {/* Links */}
            {isOpen && (
                <div className="navbar__links">
                    <Link onClick={() => setIsOpen(false)} className="navbar__link" to="#">About Us</Link>
                    <Link
                        onClick={() => setShowContactInfo(!showContactInfo)}
                        className="navbar__link"
                        to="#"
                    >
                        Contact Us
                    </Link>
                    {showContactInfo && (
                        <div className="contact-info">
                            <p>Phone: 123456789</p>
                            <p>Email: abcd@gmail.com</p>
                        </div>
                    )}
                </div>
            )}

        </nav>
    );
}

export default NavBar;
