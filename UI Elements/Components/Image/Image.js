import React, {Component} from 'react';
import getStyle from '../../../helpers/state/getStyle.js';
import UIWrapper from '../UIWrapper.js';
import {CSS_PX} from '../../Data Constants/CSSConstants.js';
/* BNnb */

class ImageUI extends Component{
    render(){
        const data = {width: Number(this.props.data.width) - Number(CSS_PX), height: this.props.data.height,
             ...getStyle(this.props.data)};
        const style = {width: data.width, height: data.height, borderRadius: data.borderRadius};
        if(data.borderColor){
            style.borderColor = data.borderColor; 
        };
        return (
            <UIWrapper>
                <div className="image-ui-div">
                    <img style={style} className="image-ui-img" src={data.src} />
                </div>
            </UIWrapper>
        )
    };
};

export default ImageUI;