import React, {Component} from 'react';
import LogisticsItem from './LogisticsItem.js';
import ReturnsItem from './ReturnsItem.js';
import BrandExperience from './BrandExperience.js';
import './ForMeItemsList.css';

class ForMeItemsList extends Component{
    render(){
        return (
            <div className="for-me-tems-list-container">
                <LogisticsItem />
                <ReturnsItem />
                <BrandExperience />
            </div>
        )
    }
};

export default ForMeItemsList;