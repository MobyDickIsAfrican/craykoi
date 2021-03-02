import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './FinalCall.css'; 

class FinalCall extends Component{
    render(){
        return (
            <div className="final-call-container">
                <div className="final-call-image-container">
                    <img src="ui/Landing Page/David and Goliath.jpg" className="final-call-image" />
                </div>
                <div className="final-call-paragraph-container">
                    <p className="final-call-paragraph">
                        Okay so maybe we won't solve all your problems and we're probably not the best thing since 
                        sliced bread. But what we will do is empower you to transition to digital by putting 
                        your brand first. Your customers should not leave your brand when they leave 
                        the store, they should be taking your brand into their homes, cars, taxi's and anywhere 
                        there is an internet signal. 
                    </p>
                </div> 
                <div className="final-call-header-container"> 
                    <h2 className="final-call-header">
                        Digitize your brand today
                    </h2>
                </div>
                <div className="final-call-button-container">
                    <Link to={'/editor'}>
                    <button className="final-call-button">Get Started</button>
                    </Link>
                </div>
            </div>
        )
    }
};

export default FinalCall;