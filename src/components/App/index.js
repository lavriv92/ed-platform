import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Login from '../../components/Login';

import app from './state';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      user: app.currentUser()
    };
  }

  componentWillMount() {
    app.watch('user', (_, oldValue, user) => {
      console.log(user);
      this.setState({user});
    });
  }

  componentWillUnmount() {
    app.unwatch('user');
  }

  render() {
    let {children} = this.props;
    let {user} = this.state;

    return (
      <section className="wrapper">
        <Header />
        <main className="main-section">{user ? children : <Login />}</main>
        <Footer />
      </section>
    );
  }
}
