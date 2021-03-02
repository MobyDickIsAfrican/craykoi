import React, {Component} from 'react';
import './ComeCrayKoi.css';
import {Link} from 'react-router-dom';

class ComeCrayKoi extends Component{
    render(){
        return (
            <div className="come-craykoi-container">
                <div className="come-craykoi-wrapper">
                    <h3 className="come-craykoi-header">CrayKoi To The Rescue</h3>
                    <p className="come-craykoi-paragraph">
                        CrayKoi is an easy to use website builder that empowers you to create store-centric websites. 
                        No Checkout. No Deliveries. No Returns. With a CrayKoi website your customers can engage 
                        with your brand anytime, anywhere. Your customers can view your products, consume your 
                        content and engage with your brand. 
                    </p> 
                </div>
                <div className="why-craykoi-container">
                    <h3 className="why-craykoi-header">Why CrayKoi</h3>
                    <p className="why-craykoi-paragraph">
                        <ul className="why-craykoi-ul">
                            <li className="why-craykoi-li">Grow Your brand by leverging the power of Digital</li>
                            <li className="why-craykoi-li">Drive Customer Engagement</li>
                            <li className="why-craykoi-li">Increase Customer Retention</li>
                            <li className="why-craykoi-li">Drive more traffic to your store</li>
                        </ul>
                    </p>
                </div>
                <div className="come-craykoi-button-container">
                    <Link to={'/editor'}>
                    <button className="come-craykoi-button">Get Started</button>
                    </Link>
                </div>
            </div>
        )
    }
};

export default ComeCrayKoi;