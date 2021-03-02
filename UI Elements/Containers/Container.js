import React, {Component} from 'react';
import getStyle from '../../helpers/state/getStyle.js';
/* nb */
import './container.css';

class Container extends Component{
    constructor(props){
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
        this.state = {colorToggle: false};
    };
    onDrop(e){ 
        e.stopPropagation();
        let target = e.target;
        let compatibility = e.dataTransfer.getData("compatibility");
        console.log(compatibility, this.props.allowed);
        if(this.compatibilityCheck(compatibility, this.props.allowed)){
            console.log(compatibility, this.props.allowed);
            return this.updatePosition(
                e.pageX, 
                e.pageY, 
                target.getBoundingClientRect().left,
                target.getBoundingClientRect().top,
                this.props.data.id,
                e.dataTransfer.getData("id")
            )
        }
    };
    onDragOver(e){
        e.stopPropagation();
        let types = e.dataTransfer.types;
        if(types.find(type => {return type ==="compatibility"})){
            e.preventDefault();
        };
    };
    mouseOver(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState((state) => {
            return this.setState({colorToggle: !state.colorToggle})
        });
    };
    mouseOut(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState((state) => {
            return this.setState({colorToggle: !state.colorToggle})
        });
    };
    compatibilityCheck(compatibility1, compatibility2){
        if(compatibility1 === compatibility2 || compatibility1 === "ALL"){
            return true;
        };
        return false;
    };
    updatePosition(droppedX, droppedY, containerX, containerY, containerID, droppedID){
        let left = Math.round(Number(droppedX)) -  Math.round(Number(containerX));
        let top =  Math.round(Number(droppedY)) -  (Math.round(Number(containerY)) + window.scrollY);
        return this.props.updatePosition(left, top, containerID, droppedID)
    }
    render(){
        const color = (this.state.colorToggle) ? {backgroundColor: "lightblue"} : {} 
        const style = {
            width: this.props.data.width, 
            height: this.props.data.height, 
            ...getStyle(this.props.data),
            ...color
        };
        return (
            <div onDrop={this.onDrop} onDragOver={this.onDragOver} onMouseOver={this.mouseOver}
            className="container" style={style} onMouseOut={this.mouseOut}>
                {this.props.children}
            </div>
        )
    }
};

export default Container;