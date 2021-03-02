import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import RootEditor from './Editor/RootEditor.js';
import LandingPage from './Landing/LandingPage.js';
import SignUp from './SignUp.js';


class App extends Component {

  render(){
    return (
      <div className="App">
        <Router>
          <Header />
            <Switch>
              <Route path="/editor/:title">
                <RootEditor />
              </Route>
              <Route path="/editor">
                <RootEditor />
              </Route>
              <Route path="/sign-up">
                <SignUp />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          <Footer />
        </Router>
      </div>
    )
  }
  }

export default App;