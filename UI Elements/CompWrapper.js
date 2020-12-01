import React, {Component} from 'react';
import './CompWrapper.css';

class CompWrapper extends Component{
    constructor(props){
        super(props);
        this.onRightDown = this.onRightDown.bind(this);
        this.onBottomDown = this.onBottomDown.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
    };
    onRightDown(e){
        e.preventDefault();
        console.log('whoah');
        return this.props.adjust(true, false, this.props.stringID);
    };
    onBottomDown(e){
        e.preventDefault();
        console.log('jeez');
        return this.props.adjust(false, true, this.props.stringID);
    };
    onMouseUp(e){
        return this.props.mouseUp();
    };
    createUI(ui, stringID, position, width, height, mouseDown, mouseUp){
        return (
            React.createElement(
                ui,
                {
                  stringID: stringID,
                  position: position,
                  width: width,
                  height: height,
                  mouseDown: mouseDown,
                  mouseUp: mouseUp
                }
              )
        )
    };
    onDragStart(e, stringID){
        e.dataTransfer.setData('id', stringID);
        console.log(e);
    }
    render(){
        const px = 15;
        const width = this.props.width;
        const height = this.props.height;
        const style = {position: this.props.positioning, left: this.props.position.left, 
            top: this.props.position.top, width: width + px, height: height + px, z: 1000};
        console.log(style);
        return (
            <div className="comp-wrapper-container" style={style} draggable 
            onDragStart={(e) => {this.onDragStart(e, this.props.stringID)}}>
                <div className="comp-wrapper-horizonatal-container">
                    <div className="comp-wrapper-child-ui">
                        {this.createUI(this.props.ui, this.props.stringID, this.props.position, 
                            this.props.width, this.props.height, this.props.mouseDown, this.props.mouseUp)}
                    </div>
                    <div className="comp-wrapper-right" onMouseDown={this.onRightDown}
                    onMouseUp={this.onMouseUp} style={{width: style.width}}></div>
                </div>
                <div className="comp-wrapper-bottom" onMouseDown={this.onBottomDown}
                onMouseUp={this.onMouseUp} style={{height: style.height}}></div>
            </div>
        )
    }
}

export default CompWrapper;