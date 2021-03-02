import React, {Component} from 'react';
import BackgroundContainer from'./BackgroundContainer.js';
import ForMe from './ForMe.js';
import ComeCrayKoi from './ComeCrayKoi.js';
import FinalCall from './FinalCall.js';
import './LandingPage.css';

class LandingPage extends Component{
    render(){
        return (
            <div className="landing-page-container">
                <BackgroundContainer />
                <ForMe />
                <ComeCrayKoi />
                <FinalCall />
            </div>
        )
    }
};

export default LandingPage;