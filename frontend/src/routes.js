import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Index from './components/Index';
import ClassRooms from './components/ClassRooms';

export default (
  <Route path="/" component={App}>
    <IndexRoute path="" component={Index}/>
    <Route path="classrooms" component={ClassRooms} />
  </Route>
);
