import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="navbar">
                    <div className="navbar_left">
                    <div className="logo">
                        <a href="#">Coding Market</a>
                    </div>
                    </div>

                    <div className="navbar_right">
                    <div className="notifications">
                        <div className="icon_wrap"><i className="far fa-bell"></i></div>
                        
                        <div className="notification_dd">
                            <ul className="notification_ul">
                                <li className="starbucks success">
                                    <div className="notify_icon">
                                        <span className="icon"></span>  
                                    </div>
                                    <div className="notify_data">
                                        <div className="title">
                                            Lorem, ipsum dolor.  
                                        </div>
                                        <div className="sub_title">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    </div>
                                    <div className="notify_status">
                                        <p>Success</p>  
                                    </div>
                                </li>  
                                <li className="baskin_robbins failed">
                                    <div className="notify_icon">
                                        <span className="icon"></span>  
                                    </div>
                                    <div className="notify_data">
                                        <div className="title">
                                            Lorem, ipsum dolor.  
                                        </div>
                                        <div className="sub_title">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    </div>
                                    <div className="notify_status">
                                        <p>Failed</p>  
                                    </div>
                                </li> 
                                <li className="mcd success">
                                    <div className="notify_icon">
                                        <span className="icon"></span>  
                                    </div>
                                    <div className="notify_data">
                                        <div className="title">
                                            Lorem, ipsum dolor.  
                                        </div>
                                        <div className="sub_title">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    </div>
                                    <div className="notify_status">
                                        <p>Success</p>  
                                    </div>
                                </li>  
                                <li className="pizzahut failed">
                                    <div className="notify_icon">
                                        <span className="icon"></span>  
                                    </div>
                                    <div className="notify_data">
                                        <div className="title">
                                            Lorem, ipsum dolor.  
                                        </div>
                                        <div className="sub_title">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    </div>
                                    <div className="notify_status">
                                        <p>Failed</p>  
                                    </div>
                                </li> 
                                <li className="kfc success">
                                    <div className="notify_icon">
                                        <span className="icon"></span>  
                                    </div>
                                    <div className="notify_data">
                                        <div className="title">
                                            Lorem, ipsum dolor.  
                                        </div>
                                        <div className="sub_title">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    </div>
                                    <div className="notify_status">
                                        <p>Success</p>  
                                    </div>
                                </li> 
                                <li className="show_all">
                                    <p className="link">Show All Activities</p>
                                </li> 
                            </ul>
                        </div>
                        
                    </div>
                    <div className="profile">
                        <div className="icon_wrap">
                        <img src="https://i.imgur.com/x3omKbe.png" alt="profile_pic" />
                        <span className="name">John Alex</span>
                        <i className="fas fa-chevron-down"></i>
                        </div>

                        <div className="profile_dd">
                        <ul className="profile_ul">
                            <li className="profile_li"><a className="profile" href="#"><span className="picon"><i className="fas fa-user-alt"></i>
                                </span>Profile</a>
                            <div className="btn">My Account</div>
                            </li>
                            <li><a className="address" href="#"><span className="picon"><i className="fas fa-map-marker"></i></span>Address</a></li>
                            <li><a className="settings" href="#"><span className="picon"><i className="fas fa-cog"></i></span>Settings</a></li>
                            <li><a className="logout" href="#"><span className="picon"><i className="fas fa-sign-out-alt"></i></span>Logout</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="popup">
                    <div className="shadow"></div>
                    <div className="inner_popup">
                        <div className="notification_dd">
                            <ul className="notification_ul">
                                <li className="title">
                                    <p>All Notifications</p>
                                    <p className="close"><i className="fas fa-times" aria-hidden="true"></i></p>
                                </li> 
                                <li className="starbucks success">
                                    <div className="notify_icon">
                                        <span className="icon"></span>  
                                    </div>
                                    <div className="notify_data">
                                        <div className="title">
                                            Lorem, ipsum dolor.  
                                        </div>
                                        <div className="sub_title">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    </div>
                                    <div className="notify_status">
                                        <p>Success</p>  
                                    </div>
                                </li>  
                                <li className="baskin_robbins failed">
                                    <div className="notify_icon">
                                        <span className="icon"></span>  
                                    </div>
                                    <div className="notify_data">
                                        <div className="title">
                                            Lorem, ipsum dolor.  
                                        </div>
                                        <div className="sub_title">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    </div>
                                    <div className="notify_status">
                                        <p>Failed</p>  
                                    </div>
                                </li> 
                                <li className="mcd success">
                                    <div className="notify_icon">
                                        <span className="icon"></span>  
                                    </div>
                                    <div className="notify_data">
                                        <div className="title">
                                            Lorem, ipsum dolor.  
                                        </div>
                                        <div className="sub_title">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    </div>
                                    <div className="notify_status">
                                        <p>Success</p>  
                                    </div>
                                </li>  
                                <li className="pizzahut failed">
                                    <div className="notify_icon">
                                        <span className="icon"></span>  
                                    </div>
                                    <div className="notify_data">
                                        <div className="title">
                                            Lorem, ipsum dolor.  
                                        </div>
                                        <div className="sub_title">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    </div>
                                    <div className="notify_status">
                                        <p>Failed</p>  
                                    </div>
                                </li> 
                                <li className="kfc success">
                                    <div className="notify_icon">
                                        <span className="icon"></span>  
                                    </div>
                                    <div className="notify_data">
                                        <div className="title">
                                            Lorem, ipsum dolor.  
                                        </div>
                                        <div className="sub_title">
                                        Lorem ipsum dolor sit amet consectetur.
                                    </div>
                                    </div>
                                    <div className="notify_status">
                                        <p>Success</p>  
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                </div>
        )
    }
}

export default Navbar;