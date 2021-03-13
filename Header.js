import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import './Header.css';

class Header extends Component{
    constructor(props){
        super(props);
        this.menuClick = this.menuClick.bind(this);
        this.bar = (<FaBars style={{color: "rgb(1, 1, 41)"}} size="2rem"/>);
        this.times = (<FaTimes style={{color: "rgb(1, 1, 41)"}} size="2rem"/>);
        this.state = {show: "none", icon: this.bar};
    };
    menuClick(e){
        return this.toggleMenu();
    }
    //function for toggling the menu block between "none" and "block"
    toggleMenu(){
        if(this.state.show === "none"){
            return this.setState({show: "block", icon: this.times})
        } else{
            return this.setState({show: "none", icon: this.bar})
        }
    };
    getLogggedInLinks(){
        if(this.props.loggedIn){
            return (
                <nav className="nav-bar">
                    <div className="header-row">
                        <div className="header-logo-container">    
                            <Link to="/">
                            <div className="header-logo">
                                <span className="header-logo-first">
                                    Cray
                                </span>
                                <span className="header-logo-second">
                                    Koi
                                </span>
                            </div>
                            </Link>              
                        </div>
                        <div className="header-blog-link">
                            <span onClick={this.props.logOut}>
                                Logout
                            </span>
                        </div>
                    </div>
                    <div className="nav-header">
                            <div className="header-logo-2">
                                <Link to="/">
                                    <span className="header-logo-first">
                                        Cray
                                    </span>
                                </Link>
                                <Link to="/">
                                    <span className="header-logo-second">
                                        Koi
                                    </span>
                                </Link>
                            </div>
                        <div className="menu-icon" >
                            <div className="menu-icon-wrapper">
                                <span className="menu-icon-span" onClick={this.menuClick}>
                                    {this.state.icon}
                                </span>
                            </div>
                            <div className="nav-links" style={{display: this.state.show}}>
                            <div className="header-blog-link">
                                <span onClick={this.props.logOut}>
                                    Logout
                                </span>
                            </div>
                                <div className="header-about-link">
                                    <Link to="/about">
                                        <span>
                                            About
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            )
        };
        return (
            <nav className="nav-bar">
                <div className="header-row">
                    <div className="header-logo-container">    
                        <Link to="/">
                        <div className="header-logo">
                            <span className="header-logo-first">
                                Cray
                            </span>
                            <span className="header-logo-second">
                                Koi
                            </span>
                        </div>
                        </Link>              
                    </div>
                    <div className="header-blog-link">
                        <Link to="/sign-up">
                            <span>
                                Sign Up
                            </span>
                        </Link>
                        <span className="sign-in">
                            /
                        </span>
                        <Link to="/login">
                            <span>
                                Login
                            </span>
                        </Link>
                    </div>
                    <div className="header-about-link">
                        <Link to="/about">
                            <span>
                                About
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="nav-header">
                        <div className="header-logo-2">
                            <Link to="/">
                                <span className="header-logo-first">
                                    Cray
                                </span>
                            </Link>
                            <Link to="/">
                                <span className="header-logo-second">
                                    Koi
                                </span>
                            </Link>
                        </div>
                    <div className="menu-icon" >
                        <div className="menu-icon-wrapper">
                            <span className="menu-icon-span" onClick={this.menuClick}>
                                {this.state.icon}
                            </span>
                        </div>
                        <div className="nav-links" style={{display: this.state.show}}>
                            <div className="header-blog-link">
                                <Link to="/sign-up">
                                    <span>
                                        Sign Up
                                    </span>
                                </Link>
                                <span className="sign-in">
                                    /
                                </span>
                                <Link to="/login">
                                    <span onClick={this.props.logOut}>
                                        Login
                                    </span>
                                </Link>
                            </div>
                            <div className="header-about-link">
                                <Link to="/about">
                                    <span>
                                        About
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
    render(){
        return (
            <div className="header-container">
                {this.getLogggedInLinks()}                   
            </div>
        )
    }
};

export default Header;