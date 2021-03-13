import React, {Component} from 'react';

class FormProject extends Component{
    constructor(props){
        super(props);
        this.state = {name: {value: "", error: null}};
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(e){
        e.preventDefault()
        const target  = e.target
        this.setState((state) => {
            return {[target.name]: {value: target.value, error: [state[target.name]].error}}
        })
    };
    handleSubmit(e){
        e.preventDefault();
        return this.props.createProject(this.state.name.value)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="project-form-wrapper">
                    <ul className="project-form-ul">
                        <li className="project-form-label-li">
                            <h5 className="project-form-label-header">Title</h5>
                        </li>
                        <li className="project-form-input-li">
                            <input type="text" className="project-form-input" name="name"
                            value={this.state.name.value} onChange={this.handleChange}/>
                            {this.state.name.error}
                        </li> 
                    </ul>
                </div>
                <div>
                    <input type="submit" value="create" />
                </div>
            </form>
        )
    }
};

export default FormProject;