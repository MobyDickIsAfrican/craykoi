import React, {Component} from 'react';
import ImageUI from '../../Components/Image/Image.js';
import Tag from '../Tag.js';
import {GENERIC as ALLOWED} from '../../Containers/AllowedConstants.js';
import {IMAGE_TYPE} from '../../Data Constants/TypeConstants.js';
import styles from '../../../helpers/state/defaultStyles.js';

class ImageTag extends Component{
    constructor(props){
        super(props);
        this.type = IMAGE_TYPE;
        this.width = 150;
        this.height = 150;
        this.isContainer = false;
        this.src = "ui/Image UI/Image.jpg";
        this.title = "Image";
        this.alt = "image";
        this.text = null;
    }
    render(){
        let otherAttr = {...styles, text: this.text, src: "/ui/pexels-photo-3026283.jpeg"};
        return (
            <Tag ui={(<ImageUI updatePosition={this.updatePosition} data={{id: null}} />)} 
            compatibility={ALLOWED} type={this.type} width={this.width} height={this.height}
            isContainer={this.isContainer} src={this.src} title={this.title} alt={this.alt} 
             otherAttr={otherAttr}/>
        )
    }
};

export default ImageTag;