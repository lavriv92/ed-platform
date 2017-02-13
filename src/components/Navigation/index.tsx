import * as React from 'react';
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

class Navigation extends React.Component<any, undefined> {

  constructor() {
    super();
    this.state = {
      currentUser: app.currentUser()
    };
  }

  componentWillMount() {
    app.watch('user', (_, oldValue, currentUser) => {
      this.setState({currentUser});
    });
  }

  componentWillUnmount() {
    app.unwatch('user');
  }

  render() {
    let route;
    const routeNodes = Object.keys(routes).map(key => {
      route = routes[key];
      return <li key={key}><Link to={route.path}>{route.name}</Link></li>;
    });

    let {currentUser} = this.state;

    return (
      <nav className="nav">
        <ul>
          {routeNodes}
          <li>{currentUser !== null ? <ProfileMenu user={currentUser} logout={() => app.logout()}/> : null}</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
