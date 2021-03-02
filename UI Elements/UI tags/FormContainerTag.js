import React, {Component} from 'react';
import FormContainer from '../Containers/FormContainer.js';
import {GENERIC as ALLOWED} from '../Containers/AllowedConstants.js';
import Tag from './Tag.js';
import {FORMCONTAINER_TYPE} from '../Data Constants/TypeConstants.js';
import styles from '../../helpers/state/defaultStyles.js';

/* nb BN*/

class FormContainerTag extends Component{
    constructor(props){
        super(props);
        this.type = FORMCONTAINER_TYPE;
        this.width = 100;
        this.height = 150;
        this.isContainer = true;
        this.src = "ui/Generic/button.jpg";
        this.title = "Form Container";
        this.alt = "UI Container Element";
        this.text = null;
    }
    updatePosition(){
        return null;
    }
    render(){
        let otherAttr = {...styles, text: this.text};
        return (
            <Tag ui={(<FormContainer updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height} 
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
            otherAttr={otherAttr}/>
        )
    }
}

export default FormContainerTag;