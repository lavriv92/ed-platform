import * as React from 'react';
import { Link } from 'react-router';

export default class SignUp extends React.Component<any, undefined> {
  render() {
    return (
      <section className="login-page">
        <form className="login-form panel">
          <fieldset>
            <legend>Join to ED platform</legend>
            <div className="field">
              <input type="email" required placeholder="Enter your email" />
            </div>
            <div className="field">
              <input type="password" required placeholder="Enter your password" />
            </div>
            <div className="field">
              <input type="password" required placeholder="Confirm your password" />
            </div>
            <div className="field">
              <button className="button success block">Sign up</button>
            </div>
            <div className="field">
              <small>Alredy have account? <Link to="/sign-in">Sign in please</Link></small>
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
