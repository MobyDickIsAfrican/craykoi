import React, {Component} from 'react';
import { FaAngleDown } from "react-icons/fa";
import './PanelGroup.css';

class PanelGroup extends Component{
    constructor(props){
        super(props);
        this.state = {hidden: false};
        this.handleIconClick = this.handleIconClick.bind(this);
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
                    {this.props.group}
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