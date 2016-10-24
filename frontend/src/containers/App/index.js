import React, { Component } from 'react';
import { Container } from 'flux/utils';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppStore from './stores';

import './styles.css';

class App extends Component {

  static getStores() {
    return [AppStore];
  }

  static calculateState() {
    return {
      state: AppStore.getState()
    };
  }

  render() {
    return (
      <section className="wrapper">
        <Header />
        <section className="main-section">{this.props.children}</section>
        <Footer />
      </section>
    );
  }
}

export default Container.create(App);
