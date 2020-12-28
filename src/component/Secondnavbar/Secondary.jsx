import React, { Component } from 'react';
import Logo from '../../images/MainLogo/logo.png';
import './Secondary.css';

class Navbar extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="navbar">
                    <div className="navbar_left">
                    <div className="logo">
                        <img alt="logo" src={Logo} />
                    </div>
                    </div>
                    <input type="checkbox" id="menu-toggle" />
                    <label htmlFor="menu-toggle" class="menu-show"><i class="fa fa-bars"></i></label>

                    <div className="nav">
                        <ul className="nav-links">
                            <li className="nav-item"><a href="#" className="nav-link">Market Place</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Journal</a></li>
                            <label htmlFor="menu-toggle" className="menu-hide"><i className="fa fa-times"></i></label>
                        </ul>
                    </div>
                    <div className="navbar_right">
                        <button className="login_button">Login</button>
                        <button className="Get_button">Get Started</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;