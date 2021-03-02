import React, {Component} from 'react';
import ForMeItem from './ForMeItem.js';

class BrandExperienceItem extends Component{
    constructor(props){
        super(props);
        this.heading = "Brand Experience";
        this.text = `The in-store experience cannot be matched by existing online stores. Often times 
        the essence of the brand gets lost in traditional ecommerce websites.`
    }
    render(){
        return (
            <ForMeItem heading={this.heading} text={this.text} />
        )
    }
};

export default BrandExperienceItem;