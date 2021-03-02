import React, {Component} from 'react';
import './CompWrapper.css';
import DimensionWrapper from './DimensionWrapper.js';
import store from '../Redux/index.js';
import {clickCreator} from '../Redux/Actions/clickAction.js';
import {shiftCreator} from '../Redux/Actions/shiftActions.js';

// wraps ui and provides functionality for the movement of ui in space
class CompWrapper extends Component{
    constructor(props){
        super(props);
        this.onDragStart = this.onDragStart.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };
    onDragStart(e, stringID){
        e.stopPropagation();
        e.dataTransfer.setData('id', stringID);
        e.dataTransfer.setData("compatibility", this.props.data.compatibility);
        this.getShift(e, stringID);
    };
    getShift(e, stringID){
        let ui = e.target;
        console.log(ui.getBoundingClientRect());
        let shiftX = e.clientX - ui.getBoundingClientRect().left;
        let shiftY = e.clientY - ui.getBoundingClientRect().top;
        return store.dispatch(shiftCreator(shiftX, shiftY));
    };
    //handle click for editing with ribbon
    handleClick(e){
        e.preventDefault();
        e.stopPropagation();
        return store.dispatch(clickCreator(this.props.data.id));
    }
    render(){  
        return (
            <div className="comp-wrapper-container" draggable 
            onDragStart={(e) => {this.onDragStart(e, this.props.data.id)}} onClick={this.handleClick}>
                <DimensionWrapper ui={this.props.ui} data={this.props.data}/>
            </div>
        )
    }
}

export default CompWrapper;