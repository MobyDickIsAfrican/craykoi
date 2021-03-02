import React, {Component} from 'react';
import './ForMeItem.css';

class ForMeItem extends Component{
    render(){
        return (
            <div className="for-me-item-container">
                <h4 className="for-me-item-header">
                    {this.props.heading}
                </h4>
                <p className="for-me-item-text">
                    {this.props.text}
                </p>
            </div>
        )
    }
};

export default ForMeItem;