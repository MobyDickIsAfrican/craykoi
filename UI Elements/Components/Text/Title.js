import React, {Component} from 'react';
import getStyle from '../../../helpers/state/getStyle.js';
import UIWrapper from '../UIWrapper.js';
import store from '../../../Redux/index.js';
import {updateUICreator} from '../../../Redux/Actions/flatStateAction.js';
import {CSS_PX} from '../../Data Constants/CSSConstants.js';
/* BNnb */

class Title extends Component{ 
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        e.stopPropagation();
        let text = e.target.value;
        return store.dispatch(updateUICreator({...this.props.data, text: text}));

    }
    render(){
        const style = {width:  Number(this.props.data.width) - Number(CSS_PX), height: this.props.data.height,
             ...getStyle(this.props.data)};
        const value = (this.props.data.text) ? this.props.data.text: ""
        return (
            <UIWrapper>
                <div style={{...style, display: "block", 
                justifyItems: "center",}} className="title-ui">
                    <input type="text" value={value} onChange={this.handleChange} 
                    className="title-ui-input" style={{borderStyle: "none", width: "100%", height: "100%",
                    color: "inherit", textAlign: "center", outline: "none",
                    justifyContent: "center", backgroundColor: "inherit", 
                    fontSize: "inherit", fontFamily: "inherit"}}/>
                </div>
            </UIWrapper>
        )
    }
}

export default Title;