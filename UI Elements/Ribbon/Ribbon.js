import React, {Component} from 'react';
import RibbonStyleItem from './RibbonStyleItem.js';
import GeneralRibbonItem from './GeneralRibbonItem.js';
import './Ribbon.css';

 // nb

class Ribbon extends Component{
    render(){
        let style = {pointerEvents: "auto"};
        if(!this.props.data){
            style.pointerEvents = "none";
            style.backgroundColor = "grey"; 
        }
        return (
            <div className="ribbon-container" style={style}>
                <GeneralRibbonItem selectOptions={["none", ...this.props.pages]} data={this.props.data} 
                handleUIChange={this.props.handleUIChange}/>
                <RibbonStyleItem data={this.props.data} handleUIChange={this.props.handleUIChange}/>
            </div>
        )
    }
}

export default Ribbon;