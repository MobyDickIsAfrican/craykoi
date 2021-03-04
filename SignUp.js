import React, {Component} from 'react';
import {SIGN_UP, LOGIN} from './URLS.js';
import {ADMIN_URL} from './ClientURLS.js';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            name: {value: "", error: null},
            email: {value: "", error: null},
            firstPassword: {value: "", error: null},
            secondPassword: {value: "", error: null},
        }
    };
    handleSubmit(e){
        e.preventDefault()
        const data = {
            name: this.state.name.value,
            email: this.state.email.value,
            firstPassword: this.state.firstPassword.value,
            secondPassword: this.state.secondPassword.value,
        }
        const options = {method: "POST", headers: {"Content-Type": 'application/json;charset=utf-8'}, 
        body: JSON.stringify(data)};
        fetch(SIGN_UP, options)
        .then(response =>{
            if(response.ok){
                const loginData = {username: data.email, password: data.firstPassword}
                console.log(loginData);
                const loginOptions = {method: "POST", headers: {"Content-Type": 'application/json;charset=utf-8'}, 
                body: JSON.stringify(loginData)};
                return fetch(LOGIN, loginOptions).then(
                    loginResponse => {
                        if(loginResponse.ok){
                            localStorage.setItem("token", loginResponse["token"])
                            return this.props.handleLogin(ADMIN_URL)
                        }
                        console.log(loginResponse);
                        return loginResponse.json().then(
                            res => {
                                console.log(res)
                            }
                        )
                    }
                )
            };
            console.log(response);
            return response.json().then(
                res => {
                    console.log(res)
                }
            )
        })
    };
    handleChange(e){
        e.preventDefault()
        const target  = e.target
        console.log(target.name)
        this.setState((state) => {
            console.log({[target.name]: {value: target.value, error: [state[target.name]].error}})
            return {[target.name]: {value: target.value, error: [state[target.name]].error}}
        })
    }
    render(){
        return (
            <div className="sign-up-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="sign-up-name-wrapper">
                        <ul className="sign-up-name-ul">
                            <li className="sign-up-name-label-li">
                                <h5 className="sign-up-name-label-header">Name</h5>
                            </li>
                            <li className="sign-up-name-input-li">
                                <input type="text" className="sign-up-name-input" name="name"
                                value={this.state.name.value} onChange={this.handleChange}/>
                                {this.state.name.error}
                            </li>
                        </ul>
                    </div>
                    <div className="sign-up-email-wrapper">
                        <ul className="sign-up-email-ul">
                            <li className="sign-up-email-label-li">
                                <h5 className="sign-up-email-label-header">Email</h5>
                            </li>
                            <li className="sign-up-email-input-li">
                                <input type="email" className="sign-up-email-input" name="email"
                                value={this.state.email.value} onChange={this.handleChange}/>
                                {this.state.email.error}
                            </li> 
                        </ul>
                    </div>
                    <div className="sign-up-password1-wrapper">
                        <ul className="sign-up-password1-ul">
                            <li className="sign-up-password1-label-li">
                                <h5 className="sign-up-password1-label-header">Enter Password</h5>
                            </li>
                            <li className="sign-up-password1-input-li">
                                <input type="password" className="sign-up-password1-input" name="firstPassword"
                                value={this.state.firstPassword.value} onChange={this.handleChange}/>
                                {this.state.firstPassword.error}
                            </li> 
                        </ul>
                    </div>
                    <div className="sign-up-password2-wrapper">
                        <ul className="sign-up-password2-ul">
                            <li className="sign-up-password2-label-li">
                                <h5 className="sign-up-password2-label-header">Enter Password Again</h5>
                            </li>
                            <li className="sign-up-password2-input-li">
                                <input type="password" className="sign-up-password2-input" name="secondPassword"
                                value={this.state.secondPassword.value} onChange={this.handleChange}/>
                                {this.state.secondPassword.error}
                            </li> 
                        </ul>
                    </div>
                    <div>
                        <input type="submit" value="Sign Up" />
                    </div>
                </form>
            </div>
        )
    }
};

export default SignUp;