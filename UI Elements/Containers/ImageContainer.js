import React, {Component} from 'react';
import Container from './Container.js';
import {IMAGE} from './AllowedConstants.js';
/* nb */

class ImageContainer extends Component{
    constructor(props){
        super(props);
        this.allowed = IMAGE;
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

export default ImageContainer;