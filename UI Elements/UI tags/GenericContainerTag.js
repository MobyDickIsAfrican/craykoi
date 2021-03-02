import React, {Component} from 'react';
import GenericContainer from '../Containers/GenericContainer.js';
import {GENERIC as ALLOWED} from '../Containers/AllowedConstants.js'; 
import Tag from './Tag.js';
import {GENERIC_TYPE} from '../Data Constants/TypeConstants.js';
import styles from '../../helpers/state/defaultStyles.js';

/* nb BN*/

class GenericContainerTag extends Component{
    constructor(props){
        super(props);
        this.type = GENERIC_TYPE;
        this.width = 150;
        this.height = 150;
        this.isContainer = true;
        this.src = "ui/Generic/button.jpg";
        this.title = "Container";
        this.alt = "UI Container Element";
        this.text = null;
    }
    updatePosition(){
        return null; 
    }
    render(){
        let otherAttr = {...styles, text: this.text};
        return (
            <Tag ui={(<GenericContainer updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height}
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
             otherAttr={otherAttr}/>
        )
    }
}

export default GenericContainerTag;