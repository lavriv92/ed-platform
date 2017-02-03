import React, { Component } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class App extends Component {
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
