import React from 'react';
import { Link } from 'react-router';

import './styles.css';

const routes = [{
  name: 'Home',
  path: '/'
},{
  name: 'Class Rooms',
  path: '/classrooms'
},{
  name: 'Coaches',
  path: '/'
}];

export default () => {
  let route;
  const routeNodes = Object.keys(routes).map(key => {
    route = routes[key];
    return <li key={key}><Link to={route.path}>{route.name}</Link></li>
  });

  return (
    <nav className="nav">
      <ul>{routeNodes}</ul>
    </nav>
  );
};
