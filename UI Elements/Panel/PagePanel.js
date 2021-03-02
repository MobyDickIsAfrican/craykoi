import React, {Component} from 'react';
import PanelGroup from './PanelGroup.js';
import {Link} from 'react-router-dom';
import PageForm from './PageForm.js';
import './PagePanel.css';

class PagePanel extends Component{
    getTitles(){
        const titleLinks = this.props.pages.map((title) => {
            let link = `/editor/${title}`;
            return (
                <Link to={link}>
                    <div className="panel-title-link">
                        <span className="page-title-span">
                            {title}
                        </span>
                    </div>
                </Link>
            );
        });
        return titleLinks;
    };
    render(){
        let pageForm = (<PageForm />);
        return (
            <PanelGroup category={"Pages"} group={[pageForm, ...this.getTitles()]} />
        )
    };
};

export default PagePanel;