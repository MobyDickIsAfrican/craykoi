import React, {Component} from 'react';

class PanelFigure extends Component{
    constructor(props){
        super(props);
        this.onDragStart = this.onDragStart.bind(this);
    };
    onDragStart(e, name){
        let id = this.makeID(name);
        //set type so you can check if element is droppable on spcific targets, id is for updating state on "Drop"
        e.dataTransfer.setData("type", name);
        e.dataTransfer.setData("id", id);
        return
    };
    makeID(name){
        let date = name + "-" +(new Date().getTime());
        return date
    }
    render(){
        let size = this.props.size;
        return (
            <div className="panel-figure-container">
                <ul>
                    <li className="panel-figure-name"> {this.props.displayName}</li>
                    <li className="panel-figure-image" draggable>
                        <img src={this.props.src} onDragStart={(e) => {this.onDragStart(e, this.props.uiName)}}
                        style={{width: size.width, height: size.height}}></img>
                    </li>
                </ul>
            </div>
        )
    }
};

export default PanelFigure;