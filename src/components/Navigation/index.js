import React, { Component } from 'react';
import { Link } from 'react-router';
import ProfileMenu from '../ProfileMenu';

import app from '../App/state';

const routes = [{
  name: 'Home',
  path: '/'
},{
  name: 'Class Rooms',
  path: '/classrooms'
},{
  name: 'Coaches',
  path: '/coaches'
}];

class Navigation extends Component {

  componentWillMount() {
    app.watch('isLogined', () => {
      this.render();
      console.log('login');
    });
  }

  componentWillUnmount() {
    app.unwatch('isLogined');
  }

  render() {
    let route;
    const routeNodes = Object.keys(routes).map(key => {
      route = routes[key];
      return <li key={key}><Link to={route.path}>{route.name}</Link></li>;
    });

    let currentUser = app.currentUser();

    let profileMenu = currentUser !== null ? <ProfileMenu user={currentUser} logout={app.logout}/> : null;

    return (
      <nav className="nav">
        <ul>
          {routeNodes}
          <li>{profileMenu}</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
