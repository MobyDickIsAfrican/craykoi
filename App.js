import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Header from './Header.js';
import Footer from './Footer.js';
import LandingPage from './Landing/LandingPage.js';
import SignUp from './SignUp.js';
import Login from './Login.js';
import Project from './Project.js';
import Admin from './Admin.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {loggedIn: false, redirectState: {redirect: false, redirectTo: null}};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  };
  handleLogin(redirectURL){
    return this.setState({loggedIn: true, redirectState: {redirect: true, redirectTo: redirectURL}})
  };
  handleLogout(){
    localStorage.removeItem("token");
    return this.setState({loggedIn: false})
  }
  render(){
    let redirectComponent = (this.state.redirectState.redirect) ? 
    (<Redirect to={this.state.redirectState.redirectTo} />): null
    return (
      <div className="App">
        <Router>
        <Header loggedIn={this.state.loggedIn} logOut={this.handleLogout} />
            <Switch>
              <Route path="/project/:id" render={(oProps) => <Project {...oProps} />}/>
              <Route path="/admin">
                <Admin />
              </Route>
              <Route path="/sign-up">
                <SignUp handleLogin={this.handleLogin} />
              </Route>
              <Route path="/login">
                <Login handleLogin={this.handleLogin} />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
            {redirectComponent}
            <Footer />
        </Router>
      </div>
    )
  }
  }

export default App;