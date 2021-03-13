import React, {Component} from 'react';
import RootEditor from './Editor/RootEditor.js';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {getProject} from './URLS.js';
import {tokenHeader} from './helpers/auth/auth.js';
import store from './Redux/index.js';
import {loadUICreator} from './Redux/Actions/flatStateAction';

class Project extends Component{
    componentDidMount(){
        const projectID = this.props.match.params.projectID;
        let token;
        try {
            token = tokenHeader();
        } catch (error) {
            return
        }
        const options = {method: "GET", headers: {"Content-Type": 'application/json;charset=utf-8',
         ...token}};
        return fetch(getProject(projectID), options)
        .then(res => {
            if(res.ok){
                return res.json()
                .then(arr => {
                    console.log(arr);
                     return store.dispatch(loadUICreator(arr))
                })
            };
        })
    }
    render(){
        return (
            <div>
                <Switch>
                    <Route path="/project/:id/editor/:title">
                        <RootEditor />
                    </Route>
                    <Route path="/project/:id/editor">
                        <RootEditor />
                    </Route>
                </Switch>
            </div>
        )
    }
};

export default Project;