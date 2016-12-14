import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './styles.css';

class App extends Component {

  render() {
    return (
      <section className="wrapper">
        <Header />
        <main className="main-section">{this.props.children}</main>
        <Footer />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(App);
