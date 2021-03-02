import React, {Component} from 'react';
import Header from '../../Components/Generic/Header.js';
import Tag from '../Tag.js';
import {GENERIC as ALLOWED} from '../../Containers/AllowedConstants.js';
import {HEADER_TYPE} from '../../Data Constants/TypeConstants.js';
import styles from '../../../helpers/state/defaultStyles.js';

class HeaderTag extends Component{
    constructor(props){
        super(props);
        this.type = HEADER_TYPE;
        this.width = 600;
        this.height = 50; 
        this.isContainer = true;
        this.src = "ui/Generic/Header.jpg";
        this.title = "Header";
        this.alt = "Header";
        this.text = null;
    }
    render(){
        let otherAttr = {...styles, backgroundColor: "orange", text: this.text};
        return (
            <Tag ui={(<Header updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height}
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
             otherAttr={otherAttr}/>
        )
    }
};

export default HeaderTag;