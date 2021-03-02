import React, {Component} from 'react';

class NewPageForm extends Component{
    constructor(props){
        super(props);
        this.state = {showForm: false};
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleClick(e){
        return this.setState((state) => {
            return {showForm: !state.showForm}
        })
    };
    handleSubmit(e){
        e.preventDefault();
        let title = e.target.page.value;
        this.props.addPage(title);
    }
    render(){
        let form = (
            <form className="new-page-form" onSubmit={this.handleSubmit}>
                <ul className="new-page-form-ul">
                    <li className="new-page-form-title">Title</li>
                    <li className="new-page-form-input-wrapper">
                        <input name="page" type="text" className="new-page-form-input"/>
                    </li>
                </ul>
                <div className="new-page-form-submit-div">
                    <input className="new-page-form-submit" type="submit"></input>
                </div>
            </form>
        );
        let createPage = (
            <div className="create-page-div">
                <button className="create-page-button" onClick={this.handleClick}>Create Page</button>
            </div>
        );
        let ui = (this.state.showForm) ? form : createPage;
            return (
                <div className="new-page-form-container">
                    <p className="new-page-form-text">
                        Create a webpage to start dragging and dropping UI elements
                    </p>
                    {ui}
                </div>
            )
    }
};

export default NewPageForm;