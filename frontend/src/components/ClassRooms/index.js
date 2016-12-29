import React from 'react';
import { connect } from 'react-redux';

const ClassRooms = props => (
  <section>
    <h2>Class rooms</h2>
  </section>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ClassRooms);
