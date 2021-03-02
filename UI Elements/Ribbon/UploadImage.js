import React, {Component} from 'react';
import './UploadImage.css';

class UploadImage extends Component{
    constructor(props){
        super(props);
        this.handleFileChange = this.handleFileChange.bind(this);
    };
    handleFileChange(e){
        let file = e.target.files[0];
        let url =URL.createObjectURL(file);
        if(this.props.stateAttr === "src"){
            this.props.handleUIChange(this.props.id, {[this.props.stateAttr]: url});
            e.target.value = null;
            return
        }
        this.props.handleUIChange(this.props.id, {[this.props.stateAttr]: `url(${url})`});
        e.target.value = null;
        return
    };
    render(){
        let style = {pointerEvents: "auto"}; 
        if(!this.props.id){
            style.pointerEvents = "none";
        };
        return ( 
            <div className="upload-image-form">
                <div className="upload-image-span-wrapper">
                    <span className="upload-text">Image:</span>
                </div>
                <div className="upload-wrapper" style={style}>
                    <input type="file" name="background" className="upload-file-input"
                    accept=".jpg, .jpeg, .png" onChange={this.handleFileChange}/>
                </div>
            </div>
        )
    }
}

export default UploadImage;