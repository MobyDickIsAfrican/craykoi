import React, {Component} from 'react';
import { FaAngleDown } from "react-icons/fa";
import PanelFigure from './PanelFigure.js';
import './PanelGroup.css';

class PanelGroup extends Component{
    constructor(props){
        super(props);
        this.getName = this.getName.bind(this);
        this.state = {hidden: false};
        this.handleIconClick = this.handleIconClick.bind(this);
    };
    createGroup(group, func){
        let groupMap = group.map((ele) =>{
            let name = func(ele.name);
            return (
                <PanelFigure key={ele.name} displayName={name} src={ele.src} uiName={ele.name}
                size={{width: ele.width, height: ele.height}} />
            )
        });
        return groupMap;
    };
    getName(type){
        let wordArray = type.split("-");
        let wordMap = wordArray.map((word) => {
            return word[0].toUpperCase() + word.slice(1)
        })
        let name = wordMap.join(" ");
        return name;
    };
    //toggle hidden state property on "click"
    handleIconClick(e){
        return this.setState((state) => {
            return {hidden: !state.hidden}
        })
    };
    render(){
        let panelFigures = null;
        if(!this.state.hidden){
            panelFigures = (
                <div className="panel-group-figures" >
                    {this.createGroup(this.props.group, this.getName)}
                </div>
            )
        }
        return (
            <div className="panel-group-container">
                <div className="panel-group-wrapper-2">
                    <div className="panel-group-main-header">
                        <div className="panel-group-category-header">
                            <h3>{this.props.category}</h3>
                        </div>
                        <div className="panel-group-angle-down" onClick={this.handleIconClick}>
                            <FaAngleDown style={{size: "3rem"}}/>
                        </div>
                    </div>
                    {panelFigures}
                </div>
            </div>
        )
    }
};

export default PanelGroup;