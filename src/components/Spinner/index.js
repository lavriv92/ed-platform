import React, { PropTypes } from 'react';

const SIZES = {
  small: '.small',
  normal: '.normal',
  large: '.large'
};

function rectSizes(count) {
  let width = 15;
  let height = 15;
  let x = 0;
  let rects = [];
  for (let i = 0; i <= count + 2; i++) {
    rects.push(<rect width={width} height={height} key={i} x={x}></rect>);
    x = x + width + 1;
    i++;
  }
  return rects;
}

const Spinner = ({count=4}) => (
  <svg className="spinner ${sizeClass}">{rectSizes(count)}</svg>
);

Spinner.propTypes = {
  size: PropTypes.oneOfType(SIZES)
};

export default Spinner;
