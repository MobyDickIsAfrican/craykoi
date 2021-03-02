import React, {Component} from 'react';
import store from '../../Redux/index.js';
import {updateUICreator} from '../../Redux/Actions/flatStateAction.js';
import './RibbonLink.css';

class RibbonLink extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    createOptions(){
        let options = [];
        this.props.selectOptions.forEach((element, i) => {
        options.push(<option value={element} key={i} className="general-ribbon-option">{element}</option>)
        });
        return options;
    };
    handleChange(e){
        if(e.target.value === "none"){
            let data = {...this.props.data, linkTo: null};
            return store.dispatch(updateUICreator(data));
        };
        let data = {...this.props.data, linkTo: e.target.value};
        return store.dispatch(updateUICreator(data));
    }
    render(){
        let style = {pointerEvents: "none"};
        let link = "none";
        let options = null;
        if(this.props.selectOptions.length > 0){
            options = this.createOptions();
            style.pointerEvents = "auto";
            if(this.props.data){
                link = (this.props.data.linkTo) ? this.props.data.linkTo : link
            }
        }
        return (
            <div className="ribbon-link-content">
                <div className="ribbon-link-div">
                    <span className="ribbon-link-span">Link to:</span>
                </div>
                <div  className="ribbon-link-input-div">
                    <select name="pageInput" value={link} style={style} onChange={this.handleChange}>
                    {options}
                    </select>
                </div>
            </div>
        )
    }
}

export default RibbonLink;