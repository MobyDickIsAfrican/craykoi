import React, {Component} from 'react';
import Editor from "./Editor.js";
import {Route, Switch,} from 'react-router-dom';
import store from '../Redux/index.js';
import {addUICreator, updateUICreator} from '../Redux/Actions/flatStateAction';
import {dropAdjustCreator} from '../Redux/Actions/adjustActions.js';
import isRoot from '../helpers/state/isRoot.js';
import getPosition from '../helpers/App Helpers/Position Updaters/getPosition.js';
import getUI from '../Redux/Selectors/getUI.js';
import {DIM_CSS_UPDATE} from '../UI Elements/Data Constants/CSSConstants.js';


class EditorContainer extends Component{
    constructor(props){
        super(props);
        this.updatePosition = this.updatePosition.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.rootDiv = React.createRef();
        this.onMouseUp = this.onMouseUp.bind(this);
    };
    onMouseMove(e){
        let pageX = e.pageX;
        let pageY = e.pageY;
        return this.handleMouseMove(pageX, pageY)
      };
    handleMouseMove(pageX, pageY){
        let state = getUI(store.getState());
        //update width and height
        if(state.adjust.rightAdjust || state.adjust.bottomAdjust || state.adjust.topAdjust 
            || state.adjust.leftAdjust){
            this.updateDim(pageX, pageY, state)
        }
    };
    updateDim(pageX, pageY, state){
        let currentID = state.adjust.currentID;
        if(state.adjust.rightAdjust){
            // root container cannot be adjusted horizontally
            if(isRoot(currentID)){
            return;
            }
            let ele = state.byID[currentID];
            let delta = pageX - ( 
            getPosition(ele.id, state.byID, "left") + 
            Number(this.rootDiv.current.getBoundingClientRect().left)
            );
            let eleState = {...ele, width: Math.round(delta)};
            return store.dispatch(updateUICreator({...eleState}))
        } else if(state.adjust.bottomAdjust){
            let ele = state.byID[currentID];
            let delta = pageY - (
            getPosition(ele.id, state.byID, "top") + 
            Number(this.rootDiv.current.getBoundingClientRect().top) + Number(window.scrollY)
            );
            let eleState = {...ele, height: Math.round(delta)};
            return store.dispatch(updateUICreator({...eleState}))
        } else if(state.adjust.leftAdjust){
            if(isRoot(currentID)){
                return;
                }
            let ele = state.byID[currentID];
            let delta = pageX - ( 
            getPosition(ele.id, state.byID, "left") + 
            Number(this.rootDiv.current.getBoundingClientRect().left)
            );
            console.log(delta);
            let left = Number(delta) + Number(ele.left);
            let width = Number(ele.width) - delta;
            let eleState = {...ele, width: Math.round(width), left: Math.round(left)};
            return store.dispatch(updateUICreator({...eleState}));
        } else if(state.adjust.topAdjust){
            if(isRoot(currentID)){
                return;
                };
            let ele = state.byID[currentID];
            let delta = pageY - (
            getPosition(ele.id, state.byID, "top") + 
            Number(this.rootDiv.current.getBoundingClientRect().top) + Number(window.scrollY)
            );
            let top = Number(delta) + Number(ele.top);
            let height = Number(ele.height) - delta;
            let eleState = {...ele, height: Math.round(height), top: Math.round(top)};
            return store.dispatch(updateUICreator({...eleState}))
        }
    };
    updatePosition(left, top, dropTargetID, droppedID){
        let state = getUI(store.getState());
        // root container cannot be dragged
        if(isRoot(droppedID)){
            return;
        };
        // cannot drop target on itself
        if(dropTargetID === droppedID){
            return
        };
        //get current page
        let page = state.byID[dropTargetID].page;
        let dropped = state.byID[droppedID];
        let update = true;
        if(!dropped){
            if(state.BufferElement.id === droppedID){
            update = false;
            dropped = state.BufferElement;
            } else{
            throw new Error("element does not exist");
            }
        };
        // correct shift
        const {correctedLeft, correctedTop} = this.correctShift(
            left, 
            top, 
            state.shift.currentShiftX,
            state.shift.currentShiftY,
        );
        dropped = {...dropped, left: correctedLeft, top: correctedTop, parent: dropTargetID, page};
        if(update){
            return store.dispatch(updateUICreator(dropped))
        };
        return store.dispatch(addUICreator(dropped));
    };
    correctShift(left, top, shiftX, shiftY){
        left = Math.round(left) - Math.round(shiftX);
        top = Math.round(top) - Math.round(shiftY);
        return {correctedLeft: left, correctedTop: top}
    };
    onMouseUp(e){
        e.stopPropagation();
        return store.dispatch(dropAdjustCreator());
      };
    render(){
        return ( 
            <div className="editor-container-wrapper" ref={this.rootDiv}  onMouseMove={this.onMouseMove}
             onMouseUp={this.onMouseUp} >
                <Switch>
                    <Route path="/editor/:title" render={(props) => {return (
                        <Editor {...props} updatePosition={this.updatePosition} />
                    )}} />
                    <Route path="/editor" render={(props) => {return (
                        <Editor {...props} updatePosition={this.updatePosition} />
                    )}} />
                </Switch>
            </div>
        )
    }
};

export default EditorContainer;