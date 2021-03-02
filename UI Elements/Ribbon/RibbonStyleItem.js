import React, {Component} from 'react';
import BorderItem from './BorderItem.js';
import FontItem from './FontItem.js';
import BackgroundItem from './BackgroundItem.js';
import './RibbonStyleItem.css';

class RibbonStyleItem extends Component{
    render(){ 
        return (
            <div className="ribbon-style-item-container">
                <BackgroundItem data={this.props.data} handleUIChange={this.props.handleUIChange} />
                <FontItem data={this.props.data} handleUIChange={this.props.handleUIChange}/>
                <BorderItem data={this.props.data} handleUIChange={this.props.handleUIChange}/>
            </div>
        )
    }
};

export default RibbonStyleItem;