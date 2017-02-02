import React, { Component } from 'react';

class ProfileMenu extends Component {
  constructor() {
    super();
    this.state = {
      visible: false
    };
    this.toggleMenu = this._toggleMenu.bind(this);
  }

  _toggleMenu() {
    this.setState({visible: !this.state.visible});
  }

  render() {
    let {visible} = this.state;

    return (
      <div className="profile-menu">
        <span className="profile-link" onClick={this.toggleMenu}>Profile name</span>
        <menu className={`panel arrowed-top ${visible ? 'visible' : ''}`}>
          <li>My profile</li>
          <li>Setting</li>
          <li>Log out</li>
        </menu>
      </div>
    );
  }
}

export default ProfileMenu;
