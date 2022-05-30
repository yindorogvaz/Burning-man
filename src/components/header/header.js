import React from "react";
import "./header.scss";
import logo from "./../../assets/images/logo.png";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div className="container">

                <div className="header__nav">
                    <div className="header__left">
                        <img className="header__logo" src={logo} alt="Burning man"/>
                        <div className="header__menu">
                            <div className="header__items">
                                <Link to="/" className="header__item">Home</Link>
                                <Link to="about" className="header__item">About</Link>
                                <Link to="tickets" className="header__item">Tickets</Link>
                                <Link to="contacts" className="header__item">Contacts</Link>
                            </div>
                        </div>
                    </div>
                    <div className="header__tel">+1 893 839-23-64</div>
                </div>

                <div className="header__tickets">
                    <div className="header__subtitle">Not tne event. The life</div>
                    <div className="header__title">Burning MAN</div>
                    <Link to="/" className="header__btn">Book the tickets</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;