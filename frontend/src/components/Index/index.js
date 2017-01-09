import React, { Component } from 'react';
import { connect } from 'react-redux';

import LatestCourses from '../../components/LatestCourses';
import PopularCources from '../../components/PopularCources';
import PopularCoaches from '../../components/PopularCoaches';

import './styles.css';

class Index extends Component {
  render() {
    let { latestCourses, popularCoaches, popularCources } = this.props;

    return (
      <section className="container index-page">
        <LatestCourses cources={latestCourses}/>
        <PopularCources cources={popularCources}/>
        <PopularCoaches coaches={popularCoaches}/>
      </section>
    );
  }
}

const mapStateToProps = ({ index }) => {
  return index;
};

export default connect(mapStateToProps)(Index);
