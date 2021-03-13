import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {goToProject} from './ClientURLS.js';


class ProjectLink extends Component{
    render(){
        return (
            <Link to={goToProject(this.props.id)}>
                <div className="project-link">
                    <h5 className="project-link-title">{this.props.title}</h5>
                </div>
            </Link>
        )
    }
};

export default ProjectLink;