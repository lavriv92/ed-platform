import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { render } from 'react-dom';

import App from './containers/App';
import Index from './containers/Index';

import './stylesheets/common.css';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute path="" component={Index}/>
    </Route>
  </Router>
);

render(routes, document.querySelector('[data-react-component="root"]'));
