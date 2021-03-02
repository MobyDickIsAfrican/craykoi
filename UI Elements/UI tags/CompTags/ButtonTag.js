import React, {Component} from 'react';
import Button from '../../Components/Generic/Button.js';
import Tag from '../Tag.js';
import {GENERIC as ALLOWED} from '../../Containers/AllowedConstants.js';
import {BUTTON_TYPE} from '../../Data Constants/TypeConstants.js';
import styles from '../../../helpers/state/defaultStyles.js';

class ButtonTag extends Component{
    constructor(props){
        super(props);
        this.type = BUTTON_TYPE;
        this.width = 200;
        this.height = 50;
        this.isContainer = false;
        this.src = "ui/Generic/button.jpg";
        this.title = "Button";
        this.alt = "UI Button Element";
        this.text = "button";
    }
    render(){
        let otherAttr = {...styles, backgroundColor: "lime", text: this.text};
        return (
            <Tag ui={(<Button updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height}
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
             otherAttr={otherAttr}/>
        )
    }
};

export default ButtonTag;