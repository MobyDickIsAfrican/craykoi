import React, {Component} from 'react';

class FormContainer extends Component{
    constructor(props){
        super(props);
        this.onDrop = this.onDrop.bind(this);
        this.onDragOver = this.onDragOver.bind(this);
    };
    onDrop(e){
        let pageX = e.pageX;
        let pageY = e.pageY;
        let id = e.dataTransfer.getData("id");
        console.log(id);
        return this.props.updatePosition(pageX, pageY, id);
    };
    onDragOver(e){
        e.preventDefault();
    }
    render(){
        return (
            <div className="form-container" style={{width: 200, height: 200, backgroundColor: "red"}}
             onDrop={this.onDrop} onDragOver={this.onDragOver}></div>
        )
    }
}

export default FormContainer;