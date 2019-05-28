import React, { Component } from "react";
import Logo from "../images/logos/logo.svg";
import {Link} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faBars);
class Header extends Component {
    render() {
        return (
            <header>
                <nav id="desktop">
                    <li><Link to="/about">Кто мы</Link></li>
                    <li><Link to="/projects">Что мы делаем</Link></li>
                    <li id="brandLogo">
                        <Link to="/" className="navbar-brand page-scroll">
                            <img src={Logo} alt="Проспект" />
                        </Link>
                    </li>
                    <li><Link to="/clients">Нам доверяют</Link></li>
                    <li><Link to="/ideas">Идеи для бренда</Link></li>
                </nav>
                <nav id="mobile">
                    <li id="brandLogo">
                        <a to="/" className="navbar-brand page-scroll">
                            <img src={Logo} alt="Проспект" />
                        </a>
                    </li>
                    <li>
                        <button type="button" className="dropbtn"><FontAwesomeIcon icon={faBars} /> Menu</button>
                    </li>
                </nav>
            </header>
        )
    }
}
export default Header;