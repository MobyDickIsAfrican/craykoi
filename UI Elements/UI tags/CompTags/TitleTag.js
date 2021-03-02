import React, {Component} from 'react';
import Title from '../../Components/Text/Title.js';
import Tag from '../Tag.js';
import {GENERIC as ALLOWED} from '../../Containers/AllowedConstants.js';
import {TITLE_TYPE} from '../../Data Constants/TypeConstants.js';
import styles from '../../../helpers/state/defaultStyles.js';

class TitleTag extends Component{
    constructor(props){
        super(props);
        this.type = TITLE_TYPE;
        this.width = 50;
        this.height = 50;
        this.isContainer = false;
        this.src = "ui/Text UI/Heading.jpg";
        this.title = "Title";
        this.alt = "Title";
        this.text = "heading"
    }
    render(){
        let otherAttr = {...styles, color: "black", text: this.text};
        return (
            <Tag ui={(<Title updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height}
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
             otherAttr={otherAttr}/>
        )
    }
};

export default TitleTag;