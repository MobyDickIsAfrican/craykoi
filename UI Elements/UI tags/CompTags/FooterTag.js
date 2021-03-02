import React, {Component} from 'react';
import Footer from '../../Components/Generic/Footer.js';
import Tag from '../Tag.js';
import {GENERIC as ALLOWED} from '../../Containers/AllowedConstants.js';
import {FOOTER_TYPE} from '../../Data Constants/TypeConstants.js';
import styles from '../../../helpers/state/defaultStyles.js';

class FooterTag extends Component{
    constructor(props){
        super(props);
        this.type = FOOTER_TYPE;
        this.width = 600;
        this.height = 150;
        this.isContainer = true;
        this.src = "ui/Generic/Footer.jpg";
        this.title = "Footer";
        this.alt = "UI Footer Element";
        this.text = null;
    }
    render(){
        let otherAttr = {...styles, backgroundColor: "darkblue", text: this.text};
        return (
            <Tag ui={(<Footer updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height}
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
             otherAttr={otherAttr}/>
        )
    }
};

export default FooterTag;