import React, {Component} from 'react';
import UploadImage from './UploadImage.js';
import './GeneralRibbonItem.css';
import {IMAGE_TYPE} from '../Data Constants/TypeConstants.js';
import RibbonLink from './RibbonLink.js';

class GeneralRibbonItem extends Component{
    render(){
        let style = {pointerEvents: "auto"}; 
        let id = null;
        if(!this.props.data){
            style.pointerEvents = "none";
        } else{ 
            if(this.props.data.type === IMAGE_TYPE){
                id = this.props.data.id;
            }
        }
        return (
            <div className="general-ribbon-container">
                <div className="general-ribbon-title">
                    <h3 className="general-ribbon-header">General</h3>
                </div>
                <div className="general-ribbon-content">
                    <RibbonLink selectOptions={this.props.selectOptions} data={this.props.data}/>
                    <UploadImage handleUIChange={this.props.handleUIChange} stateAttr={"src"} 
                    id={id} />
                </div>
            </div>
        )
    }
}

export default GeneralRibbonItem;