import React, {Component} from 'react';
import Container from './Container.js';
import {GENERIC} from './AllowedConstants.js';
/* nb */

class GenericContainer extends Component{
    constructor(props){
        super(props);
        this.allowed = GENERIC;
    }
    render(){
        return (
            <Container allowed={this.allowed} 
            updatePosition={this.props.updatePosition} data={this.props.data}>
                {this.props.children} 
            </Container>
        )
    }
};

export default GenericContainer;