import CompWrapper from './CompWrapper.js';
import Grid from './Grid.js';
import React, {Component} from 'react';
import BuiltInUI from './BuiltInUI.js';
import './GridUI.css';

// renders the children of a parent container
class GridUI extends Component{
    render(){
        let gridList = this.getGridList();
        let grid = (<Grid ui={this.getUI(gridList)} />);
        return (
            <CompWrapper ui={grid} data={this.props.node.getData()} />
        );
    };
    gridDisplay(){
        return this.props.node.getGrid();
    };
    getGridList(){
        return this.props.node.getGridList()
    };
    // entries is an array of [node, style] 
    getUI(entries){
        if(!entries){
            //if container node has no children, return empty container
            return (
                <BuiltInUI data={this.props.node.getData()} updatePosition={this.props.updatePosition}>
                    <ul className="grid-ul" style={{display: "grid"}}>
                    </ul>
                    </BuiltInUI>
            )
        }
        // locations of the children
        let uiList = [];
        for(let arr of entries){ 
            let node = arr[0];
            let style = arr[1];
            if(node.isContainer()){ 
                uiList.push((
                    <li key={node.getID()} style={style} className="grid-ui-container-li">
                        <GridUI node={node} updatePosition={this.props.updatePosition} />
                    </li>
                ));
            } else{
                // node is a BuiltInUI
                let ui = (<BuiltInUI data={node.getData()}/>);
                uiList.push((
                    <li key={node.getID()} className="grid-ui-comp-wrapper-li" style={style}>
                        <CompWrapper ui={ui} data={node.getData()} />
                    </li>
                ));
            } 
        };
        let gridDisplay = this.gridDisplay();
        return (
            <BuiltInUI data={this.props.node.getData()} updatePosition={this.props.updatePosition}>
                <ul className="grid-ul" style={{...gridDisplay, display: "grid"}}>
                    {uiList}
                </ul>
            </BuiltInUI>
        )
    };
};

export default GridUI;