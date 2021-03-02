import React, {Component} from 'react';
import MenuIcon from '../../Components/Generic/MenuIcon.js';
import Tag from '../Tag.js';
import {GENERIC as ALLOWED} from '../../Containers/AllowedConstants.js';
import {MENU_TYPE} from '../../Data Constants/TypeConstants.js';
import styles from '../../../helpers/state/defaultStyles.js';

class MenuIconTag extends Component{
    constructor(props){
        super(props);
        this.type = MENU_TYPE;
        this.width = 30;
        this.height = 30;
        this.isContainer = false;
        this.src = "ui/Generic/Menu.jpg";
        this.title = "Menu";
        this.alt = "Menu Icon";
        this.text = null;
    }
    render(){
        let otherAttr = {...styles, color: "black", text: this.text};
        return (
            <Tag ui={(<MenuIcon updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height}
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
             otherAttr={otherAttr}/>
        )
    }
};

export default MenuIconTag;