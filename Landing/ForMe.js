import React, {Component} from 'react';
import ForMeContent from './ForMeContent.js';
import './ForMe.css';

class ForMe extends Component{ 
    render(){
        return (
            <div className="for-me-container">
                <div className="main-question-wrapper">
                    <h2 className="main-question-heading">
                        Do you want to take your boutique store online without giving up Profitability?
                    </h2>
                </div>
                <ForMeContent />
            </div>
        )
    }
};

export default ForMe;