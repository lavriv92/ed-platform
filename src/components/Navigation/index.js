import React from 'react';
import { Link } from 'react-router';
import ProfileMenu from '../ProfileMenu';

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

export default () => {
  let route;
  const routeNodes = Object.keys(routes).map(key => {
    route = routes[key];
    return <li key={key}><Link to={route.path}>{route.name}</Link></li>;
  });

  return (
    <nav className="nav">
      <ul>
        {routeNodes}
        <li><ProfileMenu /></li>
      </ul>
    </nav>
  );
};
