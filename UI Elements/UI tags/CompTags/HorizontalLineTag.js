import React, {Component} from 'react';
import HorizontalLine from '../../Components/Text/HorizontalLine.js';
import Tag from '../Tag.js';
import {GENERIC as ALLOWED} from '../../Containers/AllowedConstants.js';
import {HORIZONTAL_TYPE} from '../../Data Constants/TypeConstants.js';
import styles from '../../../helpers/state/defaultStyles.js';

class HorizontalLineTag extends Component{
    constructor(props){
        super(props);
        this.type = HORIZONTAL_TYPE;
        this.width = 50;
        this.height = 3;
        this.isContainer = false;
        this.src = "ui/Text UI/Horizontal Line.jpg";
        this.title = "Horizontal Line";
        this.alt = "Line";
        this.text = null;
    }
    render(){
        let otherAttr = {...styles, backgroundColor: "black", text: this.text};
        return (
            <Tag ui={(<HorizontalLine updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height}
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
             otherAttr={otherAttr}/>
        )
    }
};

export default HorizontalLineTag;