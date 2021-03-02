import React, {Component} from 'react';
import Panel from '../UI Elements/Panel/Panel.js';
import Ribbon from '../UI Elements/Ribbon/Ribbon.js';
import store from '../Redux/index.js';
import {updateUICreator} from '../Redux/Actions/flatStateAction';
import EditorContainer from './EditorContainer.js';
import getUI from '../Redux/Selectors/getUI.js';
import getPosition from '../helpers/App Helpers/Position Updaters/getPosition.js';
import getPageArray from '../Redux/Selectors/getPageArray.js';
import './RootEditor.css';

class RootEditor extends Component {
  constructor(props){
    super(props);
    this.handleUIChange = this.handleUIChange.bind(this);
  }
  // handle ui state changes as result of ribbon editing
  handleUIChange(id, change){
    let state = getUI(store.getState());
    let ele = {...state.byID[id]};
    ele = {...ele, ...change};
    return store.dispatch(updateUICreator(ele));
  };
  render(){
    let state = getUI(store.getState());
    let clickData = null;
    if(state.clickedID){
      clickData = state.byID[state.clickedID];
    }; 
    return (
          <div className="editor-content-container">
            <div className="editor-ribbon-container">
              <Ribbon pages={getPageArray(store.getState())} data={clickData} 
              handleUIChange={this.handleUIChange}/>
            </div>
            <div className="app-ui-container">
              <div className="panel-app-wrapper">
                <Panel setBuffer={this.setBuffer} pages={getPageArray(store.getState())} />
              </div>
                <EditorContainer />
            </div>
          </div>
    )
  }
  }

export default RootEditor;