import React, {Component} from 'react';
import './BuildWrapper.css';

class BuildWrapper extends  Component{
    constructor(props){
        super(props);
        } 
    render(){
        return (
            <div className="build-wrapper-container">
                {this.props.children}
            </div>
        )
    }
}

export default BuildWrapper;