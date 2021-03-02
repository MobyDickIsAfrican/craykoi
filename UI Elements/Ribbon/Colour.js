import React, {Component} from 'react';
import './Colour.css';

class Colour extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(e){
        this.props.handleChange(e.target.value);
        console.log(e.target.value);
    }
    render(){ 
        const value = (this.props.color) ? this.props.color: "#000000";
        return (
            <div className="item-color-container">
                <div className="item-color-text">
                    Color
                </div>
                <div className="item-color-picker-wrapper">
                    <input type="color" value={value} className="item-color-picker" 
                    onChange={this.handleChange} />
                </div>
            </div>
        )
    }
};

export default Colour;