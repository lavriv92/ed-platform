import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
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
              <button className="button success block">Sign in</button>
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
