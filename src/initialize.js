import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import routes from './routes';
import appStore from './store';


document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={appStore}>
      <Router history={hashHistory} routes={routes} />
    </Provider>,
    document.querySelector('#root')
  );
});
