import React, {Component} from 'react';
import Container from './Container.js';
import {FORM} from './AllowedConstants.js';
/* nb */

class FormContainer extends Component{
    constructor(props){
        super(props);
        this.allowed = FORM;
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

export default FormContainer;