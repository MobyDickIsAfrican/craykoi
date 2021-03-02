import React, {Component} from 'react';
import {shiftCreator} from  '../../Redux/Actions/shiftActions.js';
import {bufferCreator} from '../../Redux/Actions/bufferActions.js';
import store from '../../Redux/index.js';
import {COPY} from './dropEffects.js';
import './Tag.css';

class Tag extends Component{
    constructor(props){
        super(props);
        this.onDragStart = this.onDragStart.bind(this);
        this.imageRef = React.createRef();
    }  
    onDragStart(e){
        e.dataTransfer.setData("compatibility", this.props.compatibility);
        // don't want the component to be moved drom position
        e.dataTransfer.effectAllowed = COPY;
        let id = String(new Date().getTime()) + "-" + this.props.type;
        e.dataTransfer.setData("id", id);
        // get the offset of cursor, to adjust when drag image is changed
        let shift = this.getShift(e);
        // set image as UI element
        e.dataTransfer.setDragImage(this.imageRef.current, shift.shiftX, shift.shiftY);
        this.setBuffer(
            id, 
            this.props.type,
            this.props.width,
            this.props.height,
            this.props.isContainer,
            this.props.compatibility,
            {...this.props.otherAttr}
         );
         // set the app state shift
        return store.dispatch(shiftCreator(shift.shiftX, shift.shiftY))
    };
    getShift(e){
        let ui = e.target;
        let shiftX = e.clientX - ui.getBoundingClientRect().left;
        let shiftY = e.clientY - ui.getBoundingClientRect().top;
        return {shiftX, shiftY}
    };
    // creates a temporary object to store UI that is dragged, but not dropped yet
    setBuffer(id, type, width, height, isContainer, compatibility, style){
        return store.dispatch(
            bufferCreator(
                id,
                type,
                width,
                height,
                isContainer,
                compatibility,
                style
            )
        )
    }; 
    render(){
        const hiddenStyle = {display: "none"}
        return (
            <div className="tag-container" draggable onDragStart={this.onDragStart}>
                <ul>
                    <li className="tag-title">
                        {this.props.title}
                    </li>
                    <li className="tag-src">
                        <img src={`/${this.props.src}`} alt={this.props.alt} />
                    </li>
                </ul>
                <div style={hiddenStyle} className="tag-image-wrapper">
                    <div className="tag-drag-image" ref={this.imageRef}>
                    {this.props.ui}
                    </div>
                </div>
            </div>
        );
    }
};

export default Tag;