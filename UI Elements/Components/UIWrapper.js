import React, {Component} from 'react';

class UIWrapper extends Component{
    constructor(props){
        super(props);
        this.mouseOut = this.mouseOut.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
        this.state = {colorToggle: false};
    };
    mouseOver(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState((state) => {
            return this.setState({colorToggle: !state.colorToggle})
        });
    };
    mouseOut(e){
        e.stopPropagation();
        e.preventDefault();
        this.setState((state) => {
            return this.setState({colorToggle: !state.colorToggle})
        });
    };
    render(){
        const color = (this.state.colorToggle) ? {backgroundColor: "lightblue"} : {}
        return (
            <div className="components-ui-wrapper" onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}
            style={{...color}}>
                {this.props.children}
            </div>
        )
    }
};

export default UIWrapper;