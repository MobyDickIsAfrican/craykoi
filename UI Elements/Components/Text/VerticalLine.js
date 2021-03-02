import React, {Component} from 'react';
import getStyle from '../../../helpers/state/getStyle.js';
import UIWrapper from '../UIWrapper.js';

class VerticalLine extends Component{
    render(){
        const style = {width: "3px", height: this.props.data.height,
            ...getStyle(this.props.data)};
        return (
            <UIWrapper>
                <div className="vertical-line" style={style}></div>
            </UIWrapper>
        )
    }
};

export default VerticalLine;