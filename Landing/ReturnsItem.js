import React, {Component} from 'react';
import ForMeItem from './ForMeItem.js';

class ReturnsItem extends Component{
    constructor(props){
        super(props);
        this.heading = "Returns";
        this.text = `As much as 40% of all items bought online are returned. Customers expect free and 
        easy returns. The cost of these returns can be crippling.`
    }
    render(){
        return (
            <ForMeItem heading={this.heading} text={this.text} />
        )
    }
};

export default ReturnsItem;