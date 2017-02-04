import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import app from './state';

export default class App extends Component {

  componentWillMount() {
    app.watch('isLogined', (_, oldValue, newValue) => {
      if (!newValue) {
        console.log('App logged out');
      }
    });
  }

  componentWillUnmount() {
    app.unwatch('isLogined');
  }

  render() {
    let {children} = this.props;
    return (
      <section className="wrapper">
        <Header />
        <main className="main-section">{children}</main>
        <Footer />
      </section>
    );
  }
}
