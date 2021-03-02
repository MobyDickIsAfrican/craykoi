import React, {Component} from 'react';
import NewPageForm from './NewPageForm.js';
import store from '../Redux/index.js';
import getPage from '../Redux/Selectors/getPage.js';
import findPage from '../Redux/Selectors/findPage.js';
import getPageArray from '../Redux/Selectors/getPageArray';
import createRootState from './createRootState.js';
import {addUICreator} from '../Redux/Actions/flatStateAction';
import RootContainer from '../UI Elements/RootContainer.js';

class Editor extends Component{
    addPage(title){
        const rootState = createRootState(title);
        return store.dispatch(addUICreator(rootState));
    }
    render(){
        let uiState = store.getState();
        if(this.props.match.params.title){
            let title = this.props.match.params.title;
            let page = findPage(title, uiState);
            if(page){
                return (
                    <RootContainer uiFlatState={getPage(title, uiState)} 
                updatePosition={this.props.updatePosition} />
                )
            };
            // create a 404 page
            return null;
        };
        if(getPageArray(uiState).length === 0){
            return (
                <NewPageForm addPage={this.addPage} />
            )
        };
        let title = getPageArray(uiState)[0];
        return (
            <RootContainer uiFlatState={getPage(title, uiState)} 
                updatePosition={this.props.updatePosition} />
        )
    }
};

export default Editor;