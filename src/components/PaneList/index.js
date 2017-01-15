import React, { PropTypes } from 'react';

const PaneList = ({ children }) => {
  return (
    <section class="pane-list">
      {children}
    </section>
  );
};

export default PaneList;