import React, {Component} from 'react';
import Colour from './Colour.js';
import UploadImage from './UploadImage.js';
import './BackgroundItem.css';

class BackgroundItem extends Component{
    constructor(props){
        super(props);
        this.handleColorChange = this.handleColorChange.bind(this);
    };
    handleColorChange(color){
        return this.props.handleUIChange(this.props.data.id, {backgroundColor: color});
    }
    render(){
        let style = {pointerEvents: "auto"}; 
        let color = null;
        let id = null;
        if(!this.props.data){
            style.pointerEvents = "none";
            style.backgroundColor = "grey";
        } else{
            color = this.props.data.backgroundColor;
            id = this.props.data.id;
        }
        return ( 
            <div className="background-item-container" style={style}>
                <div className="background-item-title-container">
                    <h3 className="background-item-header">Background</h3>
                </div>
                <div  className="background-item-content">
                    <div className="background-item-color-wrapper">
                        <Colour handleChange={this.handleColorChange} color={color} />
                    </div>
                    <UploadImage id={id} handleUIChange={this.props.handleUIChange} 
                    stateAttr={"backgroundImage"} />
                </div>
            </div>
        )
    }
}

export default BackgroundItem;