import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import LatestCourses from '../../components/LatestCourses';
import PopularCourses from '../../components/PopularCourses';
import PopularCoaches from '../../components/PopularCoaches';

class Index extends Component {
  render() {
    let { lastCourses, popularCoaches, popularCourses } = this.props;

    return (
      <section className="container index-page">
        <LatestCourses {...lastCourses}/>
        <PopularCourses {...popularCourses}/>
        <PopularCoaches {...popularCoaches}/>
      </section>
    );
  }
}

Index.propTypes = {
  lastCourses: PropTypes.object.isRequired,
  popularCourses: PropTypes.object.isRequired,
  popularCoaches: PropTypes.object.isRequired
};

const mapStateToProps = ({ index }) => {
  return index;
};

export default connect(mapStateToProps)(Index);
