import React, { Component } from 'react';
import Logo from '../../images/MainLogo/logo.png';
import './Navbar.css';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
          profile: false,
          notifications: false,
          showAll: false,
          closeAll: false,
        };
      }
    
      setProfile = () => {
        if (this.state.notifications) {
          this.setState(function (prevState, props) {
            return {
              profile: !prevState.profile,
              notifications: !prevState.notifications,
            };
          });
        } else {
          this.setState(function (prevState, props) {
            return { profile: !prevState.profile };
          });
        }
      };
    
      setNotificatios = () => {
        if (this.state.profile) {
          this.setState(function (prevState, props) {
            return {
              profile: !prevState.profile,
              notifications: !prevState.notifications,
            };
          });
        } else {
          this.setState(function (prevState, props) {
            return { notifications: !prevState.notifications };
          });
        }
      };
    
      displayAll = () => {
        this.setState({ showAll: true, notifications: false });
      };
      closeDisplay = () => {
        this.setState({ showAll: false, closeAll: true });
      };
    
    

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

                    <div className="nav">
                        <ul className="nav-links">
                            <li className="nav-item hide"><a href="#" className="nav-link">Notifications</a></li>
                            <li className="nav-item hide"><a href="#" className="nav-link">Profile</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Market Place</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Dashboard</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Journal</a></li>
                            <label htmlFor="menu-toggle" className="menu-hide"><i className="fa fa-times"></i></label>
                        </ul>
                    </div>
                    <div className="navbar_right">
                    <div
                    className={
                        this.state.notifications
                        ? "notifications active"
                        : "notifications"
                    }
                    >
                    <div onClick={this.setNotificatios} className="icon_wrap">
                        <i className="far fa-bell"></i>
                    </div>
                        
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
                            </ul>
                            <label for="menu-toggle" class="menu-show"><i class="fa fa-bars" aria-hidden="true"></i></label>
                        </div>
                        
                    </div>
                    <div className={this.state.profile ? "profile active" : "profile"}>
                     <div onClick={this.setProfile} className="icon_wrap">
                        <img src="https://i.imgur.com/x3omKbe.png" alt="profile_pic" />
                        <span className="name">John Alex</span>
                        <i className="fas fa-chevron-down"></i>
                        </div>

                        <div className="profile_dd">
                        <ul className="profile_ul">
                            <li className="profile_click">My Wishlist</li>
                            <div className="border_profile"></div>
                            <li className="profile_click">Account Settings</li>
                            <div className="border_profile"></div>
                            <li className="profile_click">Sign Out</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    
                    <label htmlFor="menu-toggle" class="menu-show"><i class="fa fa-bars"></i></label>
                </div>
                
                <div className={this.state.showAll ? "popup showpopup " : "popup "}>
                <div className={this.props.closeAll ? "shadow  hidepopup" : "shadow "}></div>
                    <div className="inner_popup">
                        <div className="notification_dd">
                            <ul className="notification_ul">
                                <li className="title">
                                    <p>All Notifications</p>
                                    <p className={ this.props.closeAll ? "close hidepopup" : "close"}>
                                        <i
                                        onClick={this.closeDisplay}
                                        className="fas fa-times"
                                        aria-hidden="true"
                                        ></i>
                                    </p>
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