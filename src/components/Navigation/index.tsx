import * as React from 'react';
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

class Navigation extends React.Component<any, undefined> {

  constructor() {
    super();
  }

  render() {
    let route;
    const routeNodes = Object.keys(routes).map(key => {
      route = routes[key];
      return <li key={key}><Link to={route.path}>{route.name}</Link></li>;
    });

    return (
      <nav className="nav">
        <ul>
          {routeNodes}
          <li>{<ProfileMenu user={null} logout={() => console.log('logout')}/>}</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
