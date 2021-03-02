import React, {Component} from 'react';
import Colour from './Colour.js';
import './BorderItem.css';

class BorderItem extends Component{
    constructor(props){
        super(props);
        this.handleBorder = this.handleBorder.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.state = {toggled: false};
        this.borderToggle = this.borderToggle.bind(this);
    } 
    handleColorChange(color){
        return this.props.handleUIChange(this.props.data.id, {borderColor: color, borderStyle: "solid",})
    };
    handleBorder(e){
        let target = e.target;
        if(target.name === "borderWidth"){
            return this.props.handleUIChange(this.props.data.id, {borderWidth: target.value,
                borderStyle: "solid",
            })
        };
    };
    borderToggle(e){
        if(this.state.toggled){
            this.props.handleUIChange(this.props.data.id, {borderStyle: "none",});
        } else{
            this.props.handleUIChange(this.props.data.id, {borderStyle: "solid",});
        };
        return this.setState((state) => {
            return {toggled: !state.toggled}
        });
    };
    render(){
        const style = {pointerEvents: "none"};
        let color = null;
        let thickness = 14;
        if(this.props.data){
            if(this.state.toggled){
                color = (this.props.data.borderColor) ? this.props.data.borderColor: color;
                thickness = (this.props.data.borderWidth) ? this.props.data.borderWidth: thickness;
                console.log(color, thickness);
                style.pointerEvents = "auto";
            }
        }
        return ( 
            <div className="border-item-container">
                <div className="border-item-header-wrapper">
                    <h3 className="border-item-header">Border</h3>
                </div>
                <div className="border-item-content">
                    <div className="border-item-checkbox-wrapper">
                        <div className="show-border">Show Border</div>
                        <div className="border-item-checkbox-input-wrapper">
                            <input type="checkbox" name="borderDisplay" className="border-item-checkbox-input" 
                            onClick={this.borderToggle}/>
                        </div>
                    </div>
                    <div className="border-item-colour-wrapper" style={style}>
                        <Colour handleChange={this.handleColorChange} color={color}/>
                    </div>
                    <div className="border-item-thickness-wrapper">
                        <div className="border-item-thickness-text">
                            Thickness: 
                        </div>
                        <div className="border-item-thickness-input-wrapper">
                            <input type="number" name="borderWidth" min="1" max="50" step="1" 
                            className="border-item=thickness" style={style} value={thickness}
                            onChange={this.handleBorder}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BorderItem;