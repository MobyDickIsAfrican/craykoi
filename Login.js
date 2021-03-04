import React, {Component} from 'react';
import {SIGN_UP, LOGIN} from './URLS.js';
import {ADMIN_URL} from './ClientURLS.js';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            email: {value: "", error: null},
            password: {value: "", error: null},
        }
    };
    handleSubmit(e){
        e.preventDefault()
        const data = {
            username: this.state.email.value,
            password: this.state.password.value,
        }
    };
    handleChange(e){
        e.preventDefault()
        const target  = e.target
        this.setState((state) => {
            return {[target.name]: {value: target.value, error: [state[target.name]].error}}
        })
    }
    render(){
        return (
            <div className="login-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="login-email-wrapper">
                        <ul className="login-email-ul">
                            <li className="login-email-label-li">
                                <h5 className="login-email-label-header">Email</h5>
                            </li>
                            <li className="login-email-input-li">
                                <input type="email" className="login-email-input" name="email"
                                value={this.state.email.value} onChange={this.handleChange}/>
                                {this.state.email.error}
                            </li> 
                        </ul>
                    </div>
                    <div className="login-password-wrapper">
                        <ul className="login-password-ul">
                            <li className="login-password-label-li">
                                <h5 className="login-password-label-header">Enter Password</h5>
                            </li>
                            <li className="login-password-input-li">
                                <input type="password" className="login-password-input" name="password"
                                value={this.state.password.value} onChange={this.handleChange}/>
                                {this.state.password.error}
                            </li> 
                        </ul>
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        )
    }
};

export default SignUp;