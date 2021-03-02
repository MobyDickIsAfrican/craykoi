import React, {Component} from 'react';
import getStyle from '../../../helpers/state/getStyle.js';
import UIWrapper from '../UIWrapper.js';
import {FaList} from 'react-icons/fa';

class MenuIcon extends Component{
    render(){
        const style = {width: this.props.data.width, height: this.props.data.height,
            ...getStyle(this.props.data)};
        return (
            <UIWrapper>
                <div className="menu-icon">
                    <FaList style={style}/>
                </div>
            </UIWrapper>
        )
    }
};

export default MenuIcon;