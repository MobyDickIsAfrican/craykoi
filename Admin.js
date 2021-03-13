import React, {Component} from 'react';
import {tokenHeader} from './helpers/auth/auth.js';
import {PROJECTS_URL, PROJECT_NEW} from './URLS.js';
import ProjectLink from './ProjectLink.js';
import FormProject from './FormProject.js';

class Admin extends Component{
    constructor(props){
        super(props);
        this.state = {projects: [], showForm: false} // {name: "", id: ""}
        this.handleClick = this.handleClick.bind(this);
        this.createProject = this.createProject.bind(this);
    };
    componentDidMount(){
        this.getProjects();
    };
    getProjects(){
        let token;
        try {
            token = tokenHeader();
        } catch (error) {
            return
        };
        const options = {method: "GET", headers: {"Content-Type": 'application/json;charset=utf-8',
         ...token}};
        return fetch(PROJECTS_URL, options)
        .then(res => {
            if(res.ok){
                return res.json()
                .then(projects => {
                    return this.setState({projects: projects})
                })
            }
            return;
        });
    }
    createProject(name){
        let token;
        try {
            token = tokenHeader();
        } catch (error) {
            console.log(error);
            return
        };
        const options = {method: "POST", headers: {"Content-Type": 'application/json;charset=utf-8',
         ...token}, body: JSON.stringify({name: name})};
        return fetch(PROJECT_NEW, options)
        .then(res => {
            res.json().then((result) => {console.log(result)})
            if(res.ok){
                return this.getProjects()
            }
        })
    };
    showProjects(state){
        const links = state.projects.map(project => {
            return (
                <ProjectLink id={project.id} title={project.name} key={project.id} />
            )
        });
        return links;
    };
    handleClick(e){
        return this.setState((state) => {
            return {showForm: !state.showForm}
        })
    };
    render(){
        console.log(this.state);
        const toggledElement = (this.state.showForm) ? (<FormProject createProject={this.createProject}/>)
        : (
            <div className="create-new">
                <button className="create-new-button" onClick={this.handleClick}>Create project</button>
            </div>
        );
        return (
            <div className="admin-container">
                <div className="header-container">
                    <h4 className="header-title">Projects</h4>
                    {toggledElement}
                </div>
                <div className="admin-container-body">
                    {this.showProjects(this.state)}
                </div>
            </div>
        )
    }
};

export default Admin;