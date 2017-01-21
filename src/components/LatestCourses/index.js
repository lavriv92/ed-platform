import React, { PropTypes } from 'react';


const LatestCourses = () => {
  return (
    <aside>
      <h2>Latest courses</h2>
      <aside>latest courses</aside>
    </aside>
  );
};

LatestCourses.propTypes = {
  loading: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired
};

export default LatestCourses;
