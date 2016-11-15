import React, { Component } from 'react';

import LatestCources from '../../components/LatestCources';
import PopularCources from '../../components/PopularCources';
import PopularCoaches from '../../components/PopularCoaches';

import './styles.css';

class Index extends Component {
  render() {
    return (
      <section className="container index-page">
        <LatestCources />
        <PopularCources />
        <PopularCoaches />
      </section>
    );
  }
}

export default Index;
