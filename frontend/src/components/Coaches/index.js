import React from 'react';
import { connect } from 'react-redux';

const Coaches = props => (
  <section>
    <h2>Coaches</h2>
    <section></section>
  </section>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Coaches);
