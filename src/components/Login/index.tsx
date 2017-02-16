import * as React from 'react';
import { Link } from 'react-router';

import app from '../App/state';


interface LoginState {
  email: string,
  password: string
}


export default class Login extends React.Component<any, LoginState> {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);

    this.state = {
      email: null,
      password: null
    };
  }

  handleEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  login() {
    let {email, password} = this.state;
    app.login({email, password});
  }

  render() {
    return (
      <section className="login-page">
        <form className="login-form panel">
          <fieldset>
            <legend>Sign in</legend>
            <div className="field">
              <input type="email" onChange={this.handleEmail} required placeholder="Enter your Email" />
            </div>
            <div className="field">
              <input type="password" onChange={this.handlePassword} required placeholder="Enter your Password" />
            </div>
            <div className="field">
              <button className="button success block" onClick={this.login}>Sign in</button>
            </div>
            <div className="field">
              <small>Or <Link to="/sign-up">Join to Us</Link></small>
            </div>
            <div>
              <small className="text error">* - required fields</small>
            </div>
          </fieldset>
        </form>
      </section>
    );
  }
}
