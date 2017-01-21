import React from 'react';
import { connect } from 'react-redux';

const Login = () => {
  return (
    <section className="login-page">
      <form className="login-form">
        <fieldset>
          <legend>Login</legend>
          <div className="field">
            <input type="email" required placeholder="Enter your Email" />
          </div>
          <div className="field">
            <input type="password" required placeholder="Enter your Password" />
          </div>
          <div className="field">
            <button className="button long success">Sign in</button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Login);
