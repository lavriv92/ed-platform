import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Index from './components/Index';
import ClassRooms from './components/ClassRooms';
import Coaches from './components/Coaches';
import SignUp from './components/SignUp';
import Login from './components/Login';

import Guide from './components/Guide';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index}/>
    <Route path="sign-up" component={SignUp} />
    <Route path="classrooms" component={ClassRooms} />
    <Route path="coaches" component={Coaches} />
    <Route path="signin" component={Login} />

    <Route path="guide" component={Guide} />
  </Route>
);
