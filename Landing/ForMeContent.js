import React, {Component} from 'react';
import ForMeItemsList from './ForMeItemsList.js';
import './ForMeContent.css';

class ForMeContent extends Component{
    render(){
        return (
            <div className="for-me-content-container">
                <div className="for-me-content-sentence-container">
                    <h3 className="for-me-content-sentence-header">Customers are going online,</h3>
                    <p className="for-me-content-sentence-paragraph">
                        but if you have a boutique store the decision to embrace ecommerce is not that simple
                    </p>
                </div>
                <ForMeItemsList />
                <div className="bottom-line-header-wrapper">
                    <h3 className="bottom-line-header">
                        The Bottom Line is unless you sell R5,000 sneakers traditional ecommerce makes little 
                        little sense for physical apparel stores 
                    </h3>
                </div>
            </div>
        )
    }
};

export default ForMeContent;