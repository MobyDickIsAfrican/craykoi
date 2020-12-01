import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

class Footer extends Component{
    render(){
        const links=this.props.links;
        return (
            <div className="footer-container">
                <div className="first-line-container">
                    <div className="company-div">
                        <Link to="/">
                            <span className="footer-company-span">
                                Company
                            </span>
                        </Link>
                    </div>
                    <div className="link-divs">
                        {links}
                    </div>
                </div>
                <div className="footer-link">
                    <Link to="/about">
                        <span>
                            About Us
                        </span>
                    </Link>
                </div>
                <div className="footer-link">
                    <Link to="/contact">
                        <span>
                            Contact Us
                        </span>
                    </Link>
                </div>
                <div className="footer-link">
                    <Link to="/products">
                        <span className="footer-product-span">
                            Products
                        </span>
                    </Link>
                </div>
                <div className="footer-link">
                    <Link to="/blog">
                        <span>
                            Luvaba Blog
                        </span>
                    </Link>
                </div>
            </div>
        )
    }
};

export default Footer;