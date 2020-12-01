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
    }
    render(){
        let navLinks = (
            <div className="nav-links" style={{display: this.state.show}}>
                        <div className="header-blog-link">
                            <Link to="/blog">
                                <span>
                                    Blog
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
        )
        return (
            <div className="header-container">
                <nav className="nav-bar">
                    <div className="header-row">
                        <div className="header-logo-container">    
                            <Link to="/">
                            <div className="header-logo">
                                <span className="header-logo-first">
                                    Think
                                </span>
                                <span className="header-logo-second">
                                    Bytes
                                </span>
                            </div>
                            </Link>              
                        </div>
                        <div className="header-blog-link">
                            <Link to="/blog">
                                <span>
                                    Blog
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
                                        Think
                                    </span>
                                </Link>
                                <Link to="/">
                                    <span className="header-logo-second">
                                        Bytes
                                    </span>
                                </Link>
                            </div>
                        <div className="menu-icon" >
                            <div className="menu-icon-wrapper">
                                <span className="menu-icon-span" onClick={this.menuClick}>
                                    {this.state.icon}
                                </span>
                            </div>
                            {navLinks}
                        </div>
                    </div>
                </nav>
                              
            </div>
        )
    }
};

export default Header;