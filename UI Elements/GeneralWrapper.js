import React, {Component} from 'react';
import BuiltInUI from './BuiltInUI.js';
import CompWrapper from './CompWrapper.js';

class GeneralWrapper extends Component{
    renderUI(){
        if(this.props.data.type == "placeholder"){
            return (
                <div style={this.props.style}></div>
            )
        } else{
            let ui = (<BuiltInUI data={this.props.data}/>);
            return (
                <CompWrapper style={this.props.style} ui={ui} data={this.props.data} 
                adjust={this.props.adjust} mouseDown={this.props.mouseDown} mouseUp={this.props.mouseUp}/>
            )
        }
    };
    render(){
        return this.renderUI();
    }
};

export default GeneralWrapper;