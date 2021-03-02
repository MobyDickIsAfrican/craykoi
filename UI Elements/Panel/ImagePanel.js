import React, {Component} from 'react';
import PanelGroup from './PanelGroup.js';
import imageTagList from '../UI tags/imageTagList.js';
/* nb BN*/

const CATEGORY = "Image"
class ImagePanel extends Component{
    render(){
        let uiArray = imageTagList.map((value) => {
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

export default ImagePanel;