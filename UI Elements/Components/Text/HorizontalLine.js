import React, {Component} from 'react';
import getStyle from '../../../helpers/state/getStyle.js';
import UIWrapper from '../UIWrapper.js';
import {CSS_PX} from '../../Data Constants/CSSConstants.js';

class HorizontalLine extends Component{
    render(){
        const style = {width: Number(this.props.data.width) - Number(CSS_PX), height: "3px",
            ...getStyle(this.props.data)};
        return (
            <UIWrapper>
                <div className="vertical-line" style={style}></div>
            </UIWrapper>
        )
    }
};

export default HorizontalLine;