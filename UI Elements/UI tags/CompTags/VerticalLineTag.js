import React, {Component} from 'react';
import VerticalLine from '../../Components/Text/HorizontalLine.js';
import Tag from '../Tag.js';
import {GENERIC as ALLOWED} from '../../Containers/AllowedConstants.js';
import {VERTICAL_TYPE} from '../../Data Constants/TypeConstants.js';
import styles from '../../../helpers/state/defaultStyles.js';

class VerticalLineTag extends Component{
    constructor(props){
        super(props);
        this.type = VERTICAL_TYPE;
        this.width = 3;
        this.height = 50;
        this.isContainer = false;
        this.src = "ui/Text UI/Vertical Line.jpg";
        this.title = "Vertical Line";
        this.alt = "Line";
        this.text = null;
    }
    render(){
        let otherAttr = {...styles, backgroundColor: "black", text: this.text};
        return (
            <Tag ui={(<VerticalLine updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height}
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
             otherAttr={otherAttr}/>
        )
    }
};

export default VerticalLineTag;