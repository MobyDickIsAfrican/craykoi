import React, {Component} from 'react';
import Elements from '../UI Elements/Elements.js';
import PanelGroup from './PanelGroup.js';
import './Panel.css';

//retrieve imageArray from database (it must be sorted by category and name)
let imageArray = [{category: "Form", 
    elements: [{name: "input-box", src: "/ui/pexels-photo-1179141.jpeg", width: "200px",  height: "50px"}]},]; //category: "Text", "Forms", "Image", "General"

class Panel extends Component{
    constructor(props){
        super(props);
        this.elements = Elements;
    };
    createPanel(arr){
        let panel = arr.map((group) => {
            return (
                <PanelGroup key={group.category} category={group.category} group={group.elements} />
            )
        });
        return panel;
    };
    render(){
        return (
            <div className="panel-container">
                <ul>
                    <li className="panel-header-div-li">
                        <div className="panel-header-div">
                            <h2>Elements</h2>
                        </div>
                    </li>
                    <li className="panel-groups-wrapper-li">
                        <div className="panel-groups-wrapper">
                            {this.createPanel(imageArray)}
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
};

export default Panel;