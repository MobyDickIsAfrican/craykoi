import React, {Component} from 'react';
import Paragraph from '../../Components/Text/Paragraph.js';
import Tag from '../Tag.js';
import {GENERIC as ALLOWED} from '../../Containers/AllowedConstants.js';
import {PARAGRAPH_TYPE} from '../../Data Constants/TypeConstants.js';
import styles from '../../../helpers/state/defaultStyles.js';

class TitleTag extends Component{
    constructor(props){
        super(props);
        this.type = PARAGRAPH_TYPE;
        this.width = 150;
        this.height = 50;
        this.isContainer = false;
        this.src = "ui/Text UI/Paragraph.jpg";
        this.title = "Paragraph";
        this.alt = "Paragraph";
        this.text = "you can write here";
    }
    render(){
        let otherAttr = {...styles, color: "black", text: this.text};
        return (
            <Tag ui={(<Paragraph updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height}
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
             otherAttr={otherAttr}/>
        )
    }
};

export default TitleTag;