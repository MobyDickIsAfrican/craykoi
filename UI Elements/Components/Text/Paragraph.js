import React, {Component} from 'react';
import getStyle from '../../../helpers/state/getStyle.js';
import UIWrapper from '../UIWrapper.js';
import store from '../../../Redux/index.js';
import {updateUICreator} from '../../../Redux/Actions/flatStateAction.js';
import './Paragraph.css';
import {CSS_PX} from '../../Data Constants/CSSConstants.js';

class Paragraph extends Component{
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
        const style = {width: Number(this.props.data.width) - Number(CSS_PX), height: this.props.data.height,
             ...getStyle(this.props.data), 
            };
        const value = (this.props.data.text) ? this.props.data.text: ""
        return (
            <UIWrapper>
                <div style={{...style, display: "block", justifyItems: "center"}} className="paragraph-ui">
                    <textarea value={value} onChange={this.handleChange} 
                    className="paragraph-ui-input" style={{border: "none", outline: "none", 
                    resize: "none", height: "98%", width: "100%",
                    overflow: "hidden", backgroundColor: "inherit", color: "inherit",
                    fontSize: "inherit", fontFamily: "inherit"}}/>
                </div>
            </UIWrapper>
        )
    }
}

export default Paragraph;