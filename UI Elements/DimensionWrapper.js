import React, {Component} from 'react';
import store from '../Redux/index.js';
import {
    rightAdjustCreator, 
    bottomAdjustCreator,
    leftAdjustCreator,
    topAdjustCreator
} from '../Redux/Actions/adjustActions.js';
import {DIM_CSS_UPDATE as CSS} from './Data Constants/CSSConstants.js';

//provides functionality for the modification of dimensions of ui
class DimensionWrapper extends Component{
    constructor(props){
        super(props);
        this.onRightDown = this.onRightDown.bind(this);
        this.onBottomDown = this.onBottomDown.bind(this);
        this.onLeftDown = this.onLeftDown.bind(this);
        this.onTopDown = this.onTopDown.bind(this);
    }
    onRightDown(e){
        e.stopPropagation();
        e.preventDefault();
        //adjust is defined at the app level, it is the pre-requisite for handleMouseMove - defined at app level
        return store.dispatch(rightAdjustCreator(this.props.data.id))
    };
    onLeftDown(e){
        e.stopPropagation();
        e.preventDefault();
        //adjust is defined at the app level, it is the pre-requisite for handleMouseMove - defined at app level
        return store.dispatch(leftAdjustCreator(this.props.data.id))
    };
    onBottomDown(e){
        e.stopPropagation();
        e.preventDefault();
        //adjust is defined at the app level, it is the pre-requisite for handleMouseMove - defined at app level
        return store.dispatch(bottomAdjustCreator(this.props.data.id))
    };
    onTopDown(e){
        e.stopPropagation();
        e.preventDefault();
        //adjust is defined at the app level, it is the pre-requisite for handleMouseMove - defined at app level
        return store.dispatch(topAdjustCreator(this.props.data.id))
    };
    render(){
        //px is the thickness of the comp-wrapper-right and comp-wrapper-bottom
        return ( 
            <div className="dimension-wrapper">
                <div className="comp-wrapper-bottom" onMouseDown={this.onTopDown}
            style={{width: this.props.data.width, height: CSS}}>
            </div>
            <div className="comp-wrapper-horizonatal-container">
                <div className="comp-wrapper-right" onMouseDown={this.onLeftDown}
                style={{height: this.props.data.height, width: CSS}}>        
                </div>
                {this.props.ui}
                <div className="comp-wrapper-right" onMouseDown={this.onRightDown}
                style={{height: this.props.data.height, width: CSS}}></div>
            </div>
            <div className="comp-wrapper-bottom" onMouseDown={this.onBottomDown}
            style={{width: this.props.data.width, height: CSS}}></div>
        </div>
        )
    }
};

export default DimensionWrapper;