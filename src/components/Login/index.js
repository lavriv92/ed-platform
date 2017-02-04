import React, { Component } from 'react';
import { Link } from 'react-router';

import app from '../App/state';

export default class Login extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.state = {
      username: null,
      password: null
    };
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  login() {
    app.isLogined = false;
  }

  render() {
    return (
      <section className="login-page">
        <form className="login-form panel">
          <fieldset>
            <legend>Sign in</legend>
            <div className="field">
              <input type="email" required placeholder="Enter your Email" />
            </div>
            <div className="field">
              <input type="password" required placeholder="Enter your Password" />
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
