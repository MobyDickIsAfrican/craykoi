import Tree from '../helpers/Tree';
import React, {Component} from 'react';
import GridUI from './GridUI.js';

/* nb */ 
class RootContainer extends Component{ 
    render(){
        let root = new Tree(this.props.uiFlatState).createTree();
        console.log(this.props.uiFlatState);
        return (
            <div>
                <GridUI node={root} updatePosition={this.props.updatePosition} />
            </div>
        )
    }
};

export default RootContainer;