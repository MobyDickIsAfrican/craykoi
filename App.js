import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import BuildWrapper from './BuildWrapper.js';
import uIMap from './UI Elements/Elements.js';
import data from './data/UIData.js';
import CompWrapper from './UI Elements/CompWrapper.js';
import FormContainer from './UI Elements/FormContainer.js';
import Panel from './UI Elements/Panel.js';
import {Tree, addNode, getPaths, getBranch, createTree} from './helpers/TreeBuilder.js';

class App extends Component {
  constructor(props){
    super(props);
    this.elements = uIMap; //currentShiftX and currentShiftY account for the adjusted position of the cursor
    //rightAdjust and leftAdjust are toggled if the width or height are being changed respectively
    this.state = {currentID: null, currentShiftX: null, currentShiftY: null, rightAdjust: false, bottomAdjust: false,
      byID: data.byID, 
      BufferElement: {},
      idArray: data.idArray, 
      toggleMenu: {}};
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.mouseDown = this.mouseDown.bind(this);
      this.mouseUp = this.mouseUp.bind(this);
      this.adjust = this.adjust.bind(this);
      this.updatePosition = this.updatePosition.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);
  };
  onMouseMove(e){
    let pageX = e.pageX;
    let pageY = e.pageY;
    //console.log(pageX, pageY);
    return this.handleMouseMove(pageX, pageY)
  };
  handleMouseMove(pageX, pageY){
    console.log(this.state.currentID, this.state.currentShiftX, this.state.currentShiftY);
    //update width and height
    if(this.state.currentID && (this.state.rightAdjust || this.state.bottomAdjust)){
      this.updateDim(pageX, pageY, this.state)
    }
  };
  move(x, y, shiftX, shiftY){
    let xPosition = x - shiftX;
    let yPosition = y - shiftY;
    return [xPosition, yPosition]
  };
  updatePosition(pageX, pageY, id){
    if(this.state.currentID && this.state.currentShiftX && this.state.currentShiftY){
      if(this.state.currentID == id){
        let pageCoordinates = this.move(pageX, pageY, this.state.currentShiftX, this.state.currentShiftY);
        return this.setState((state) => {
        let uiObject = state.byID[this.state.currentID];
        //console.log(uiObject);
        let newState = {[this.state.currentID]: 
         { ...uiObject, left: pageCoordinates[0], top: pageCoordinates[1]}}
        //console.log(newState);
        //console.log({...state.byID, ...newState});
        return {byID: {...state.byID, ...newState}}
      })
      } else{
        console.log('something went wrong')
      }
    }
  }
  updateDim(pageX, pageY, state){
    let currentID = state.currentID;
    if(state.rightAdjust){
      let ele = state.byID[currentID];
      let delta = pageX - ele.left;
      let eleState = {...ele, width: delta};
      let newState = {
        [currentID]: {...eleState}
      }
      return this.setState((state) => {
        return {byID: {...state.byID, ...newState}}
      })
    } else if(state.bottomAdjust){
      let ele = state.byID[currentID];
      let delta = pageY - ele.top;
      let eleState = {...ele, height: delta};
      let newState = {
        [currentID]: {...eleState}
      }
      return this.setState((state) => {
        return {byID: {...state.byID, ...newState}}
      })
    }
  }
  //The currentID is used to identify an element being moved in the handleMouseMove event
  mouseDown(currentID, currentShiftX, currentShiftY){
    console.log(currentID, currentShiftX, currentShiftY)
    this.setState({currentID, currentShiftX, currentShiftY})
  };
  mouseUp(){
    if(this.state.currentID ){
      if(this.state.rightAdjust){
        console.log(this.state.rightAdjust)
        return this.setState({currentID: null, rightAdjust: false})
      } else if(this.state.bottomAdjust){
        console.log(this.state.bottomAdjust)
         return this.setState({currentID: null, bottomAdjust: false})
      }
      //handle this exception
    }
    return this.setState({currentID: null, currentShiftX: null, currentShiftY: null})
  };
  adjust(rightAdjust, bottomAdjust, currentID){
    if(rightAdjust){
      return this.setState({currentID: currentID, rightAdjust: rightAdjust})
    }
    else if(bottomAdjust){
      return this.setState({currentID: currentID, bottomAdjust: bottomAdjust})
    }
  }
  //returns an array of UI Elements with unique id's as keys - get from state
  //
  createUI(state, elements, positioning, adjust, mouseUp, mouseDown){
    let objects = state.byID;
    //console.log(objects);
    let ids = state.idArray;
    let children = ids.map((id) => {
      let element = objects[id];
      //console.log(element);
      let ui = elements.get(element.type)
      //console.log(ui);
      console.log(elements);
      return (
        <CompWrapper key={id} stringID={id} adjust={adjust} mouseUp={mouseUp} 
        position={{left: element.left, top: element.top}} mouseDown={mouseDown}
        width={element.width} height={element.height} positioning={positioning} ui={ui} />
      )
    });
    return children;

  }
  render(){
    return (
      <div className="App"  onMouseMove={this.onMouseMove}>
        <Router>
          <Header />
            <div className="app-content-container">
              <div className="panel-app-wrapper">
                <Panel />
              </div>
              <div className="build-wrapper-app-container">
                <BuildWrapper>
                  {this.createUI(this.state, this.elements, "absolute", this.adjust, this.mouseUp, this.mouseDown)}
                  <FormContainer updatePosition={this.updatePosition} />
                </BuildWrapper>
              </div>
            </div>
          <Footer />
        </Router>
      </div>
    )
  }
  }


export default App;