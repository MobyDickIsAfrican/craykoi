import React, {Component} from 'react';
import ForMeItem from './ForMeItem.js';

class LogisticsItem extends Component{
    constructor(props){
        super(props);
        this.heading = "Logistics";
        this.text = `Delivery from store to customer is more expensive than delivery from warehouse. 
        So do you incur additional warehousing costs or do you pay for delivery twice. Either way you lose.`
    }
    render(){
        return (
            <ForMeItem heading={this.heading} text={this.text} />
        )
    }
};

export default LogisticsItem;