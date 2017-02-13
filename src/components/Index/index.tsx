import * as React from 'react';

import LatestCourses from '../../components/LatestCourses';
import PopularCourses from '../../components/PopularCourses';
import PopularCoaches from '../../components/PopularCoaches';

import Spinner from '../../components/Spinner';

export default class Index extends React.Component<any, undefined> {
  render() {
    return (
      <section className="container index-page">
        <Spinner />
        <LatestCourses />
        <PopularCourses />
        <PopularCoaches/>
      </section>
    );
  }
}
