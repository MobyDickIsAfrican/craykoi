import React, {Component} from 'react';
import PanelGroup from './PanelGroup.js';
import genericTagList from '../UI tags/genericTagList.js';
/* nb BN*/

const CATEGORY = "UI"
class GenericPanel extends Component{ 
    render(){
        let uiArray = genericTagList.map((value) => {
            return React.createElement(
                value,
                {
                    setBuffer: this.props.setBuffer,
                }
            )
        });
        return (
            <PanelGroup category={CATEGORY} group={uiArray} />
        )
    }
}

export default GenericPanel;