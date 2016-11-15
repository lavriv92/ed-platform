import React, { Component } from 'react';

import LatestCources from '../../components/LatestCources';
import PopularCources from '../../components/PopularCources';
import PopularCoaches from '../../components/PopularCoaches';

class Index extends Component {
  render() {
    return (
      <section>
        <LatestCources />
        <PopularCources />
        <PopularCoaches />
      </section>
    );
  }
}

export default Index;
