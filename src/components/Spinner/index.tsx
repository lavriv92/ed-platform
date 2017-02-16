import * as React from 'react';

const SIZES = {
  small: '.small',
  normal: '.normal',
  large: '.large'
};

function rectSizes(count: number) {
  let width : number = 15;
  let height : number = 15;
  let x = 0;
  let rects : Array<any> = [];
  for (let i = 0; i <= count + 2; i++) {
    rects.push(<rect width={width} height={height} key={i} x={x}></rect>);
    x = x + width + 1;
    i++;
  }
  return rects;
}

interface SpinnerProps {
  count: number
}

export default class Spinner extends React.Component<SpinnerProps, undefined> {
  render() {
    let {count} = this.props;
    return <svg className="spinner ${sizeClass}">{rectSizes(count)}</svg>
  }
}
