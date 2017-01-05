import React, { Component } from 'react';
import { connect } from 'react-redux';

import LatestCourses from '../../components/LatestCourses';
import PopularCources from '../../components/PopularCources';
import PopularCoaches from '../../components/PopularCoaches';

import './styles.css';

class Index extends Component {
  render() {
    return (
      <section className="container index-page">
        <LatestCourses />
        <PopularCources />
        <PopularCoaches />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(Index);
