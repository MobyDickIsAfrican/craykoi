import React, {Component} from 'react';
import PanelGroup from './PanelGroup.js';
import formTagList from '../UI tags/formTagList.js';
/* nb BN*/

const CATEGORY = "Form"
class FormPanel extends Component{
    render(){
        let uiArray = formTagList.map((value) => {
            return React.createElement(
                value,
                {
                    setBuffer: this.props.setBuffer,
                    mouseDown: this.props.mouseDown
                }
            )
        });
        return (
            <PanelGroup category={CATEGORY} group={uiArray} />
        )
    }
}

export default FormPanel;