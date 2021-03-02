import React, {Component} from 'react';
import GenericPanel from './GenericPanel.js';
import PagePanel from './PagePanel.js';
import './Panel.css';

class Panel extends Component{
    render(){
        return (
            <div className="panel-container">
                <ul>
                    <li className="panel-header-div-li">
                        <div className="panel-header-div">
                            <h2>Panel</h2>
                        </div>
                    </li>
                    <li className="panel-groups-wrapper-li">
                        <div className="panel-groups-wrapper">
                            <PagePanel pages={this.props.pages}/>
                            <GenericPanel setBuffer={this.props.setBuffer} />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
};

export default Panel;