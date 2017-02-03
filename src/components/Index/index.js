import React, { Component } from 'react';

import LatestCourses from '../../components/LatestCourses';
import PopularCourses from '../../components/PopularCourses';
import PopularCoaches from '../../components/PopularCoaches';

export default class Index extends Component {
  render() {
    return (
      <section className="container index-page">
        <LatestCourses />
        <PopularCourses />
        <PopularCoaches/>
      </section>
    );
  }
}
