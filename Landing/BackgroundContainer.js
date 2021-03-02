import React, {Component} from 'react';
import './BackgroundContainer.css'; 

class BackgroundContainer extends Component{
    render(){
        return (
            <div className="landing-page-background-container">
                <img src="ui/Landing Page/Hero Image.jpg" className="landing-page-background-img" />
            </div>
        )
    }
};

export default BackgroundContainer;