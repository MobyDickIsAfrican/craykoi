import React, {Component} from 'react';
import './InputUI.css'

//
class InputUI extends Component{
    constructor(props){
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.UIType = "input-box";
        //this.id = this.props.stringID //String(new Date().getTime()) + "-" + this.UIType;
    };
    //set position of input to absolute so that its removed from document flow
    //set z-index to remove it from any parents - directly into the document body
    handleMouseDown(e){
        //e.preventDefault()
        let inputUI = e.target;
        let shiftX = e.clientX - inputUI.getBoundingClientRect().left;
        let shiftY = e.clientY - inputUI.getBoundingClientRect().top;
        console.log(this.props.stringID, shiftX, shiftY)
        this.props.mouseDown(this.props.stringID, shiftX, shiftY)
    };
    handleMouseUp(e){
        e.preventDefault();
        return this.props.mouseUp();
    };
    handleDragStart(e){
        console.log(false);
        return false
    }
    createInputUI(style){
        //style={style} 
        let inputUI = (
            <div className="inputUI-div" onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}>
                <input type="text" name="inputUI" style={style}></input>
            </div>
        );
        return inputUI;
    };
    render(){
        console.log(this.props)
        let style;
        //let position = this.props.position;
        style = {width: this.props.width, height: this.props.height}
        return this.createInputUI(style)
    }
}

export default InputUI;