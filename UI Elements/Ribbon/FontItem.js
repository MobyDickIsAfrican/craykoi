import React, {Component} from 'react';
import Colour from './Colour.js';
import './FontItem.css';
import {fontFamily} from './fontFamily.js';

class FontItem extends Component{
    constructor(props){
        super(props);
        this.handleFont = this.handleFont.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }
    handleFont(e){
        let target = e.target;
        if(target.name === "fontSize"){
            return this.props.handleUIChange(this.props.data.id, {fontSize: Number(target.value)})
        } else if(target.name === "fontFamily"){
            return this.props.handleUIChange(this.props.data.id, {fontFamily: target.value})
        }
    };
    handleColorChange(color){
        return this.props.handleUIChange(this.props.data.id, {color: color})
    }
    render(){
        let style = {pointerEvents: "auto"}; 
        let color = null;
        let id = null;
        let fontSize = 14;
        let font = "Arial";
        if(!this.props.data){
            style.pointerEvents = "none";
            style.backgroundColor = "grey";
        } else{
            color = this.props.data.backgroundColor;
            id = this.props.data.id;
            fontSize = this.props.data.fontSize;
            font = this.props.data.fontFamily;
        };
        return (
            <div className="font-item-container">
                <div className="font-item-header-wrapper">
                    <h3 className="font-item-header">Font</h3>
                </div>
                <div className="font-item-wrapper">
                <div className="font-item-colour-wrapper">
                    <Colour color={color} handleChange={this.handleColorChange} />
                </div>
                    <div className="font-size-container">
                        <div className="font-size-text-wrapper">
                            Size: 
                        </div>
                        <div className="font-size-input-wrapper">
                            <input type="number" name="fontSize" min="1" max="50" step="1" 
                            className="font-size-input" value={fontSize} onChange={this.handleFont} />
                        </div>
                    </div>
                    <div className="font-family-container">
                        <div className="font-family-text-wrapper">
                            Font:
                        </div>
                        <div className="font-family-select-wrapper">
                            <select name="fontFamily" className="font-family-select" onChange={this.handleFont}
                            value={font}>
                                {fontFamily}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default FontItem;