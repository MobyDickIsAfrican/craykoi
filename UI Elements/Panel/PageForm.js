import React, {Component} from 'react';
import {FaPlus, FaMinus} from 'react-icons/fa';
import store from '../../Redux/index.js';
import createRootState from '../../Editor/createRootState.js';
import {addUICreator} from '../../Redux/Actions/flatStateAction';
import './PageForm.css';

class PageForm extends Component{
    constructor(props){
        super(props);
        this.state = {show: false};
        this.toggle = this.toggle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    toggle(e){
        return this.setState((state) => {
            return {show: !state.show}
        })
    };
    handleSubmit(e){
        e.preventDefault();
        let state = createRootState(e.target.page.value);
        return store.dispatch(addUICreator(state));
    }
    render(){
        let initialUI = (
            <div className="new-page-wrapper">      
                <span className="new-page-text">
                    New Page
                </span>
                <div className="icon-div-plus" >
                    <span className="icon-div-plus-span" onClick={this.toggle}>
                        <FaPlus style={{color: "green"}} />
                    </span>
                </div>
            </div>
        );
        let form = (
            <form className="panel-new-page-form" onSubmit={this.handleSubmit}>
                <div className="icon-div-minus">
                    <span className="icon-div-minus-span" onClick={this.toggle}>
                        <FaMinus style={{color: "red"}} />
                    </span>
                </div>
                <div className="panel-new-page-form-wrapper">
                    <span className="panel-new-page-form-label">Page Title:</span>
                    <input type="text" name="page" className="panel-new-page-input" />
                </div>
                <div className="panel-new-page-submit-wrapper">
                    <input type="submit" value="Create" className="panel-new-page-form-submit" />
                </div>
            </form>
        );
        const ui = (this.state.show) ? form : initialUI;
        return (
            <div className="panel-new-page-container">
                {ui}
            </div>
        )
    }
};

export default PageForm;