import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';

import App from './containers/App';

import './stylesheets/common.css';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
);

render(routes, document.querySelector('[data-react-component="root"]'));
