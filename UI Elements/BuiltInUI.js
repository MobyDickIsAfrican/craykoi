import uIMap from './Elements.js';
import React, {Component} from 'react';
/* bn */
class BuiltInUI extends Component{ 
    render(){
        return this.createUI(this.props.data);
    }
    createUI(data){
        let UIClass = uIMap.get(data.type);
        let ele = React.createElement(
            UIClass,
            {
            data: data,
            updatePosition: this.props.updatePosition
            },
            {...this.props.children},
        );
        return ele;
    }
};

export default BuiltInUI;