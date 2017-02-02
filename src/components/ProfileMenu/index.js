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
        <menu className={`panel arrow-center-top ${visible ? 'visible' : ''}`}>
          <div>My profile</div>
          <div>Setting</div>
          <div>Log out</div>
        </menu>
      </div>
    );
  }
}

export default ProfileMenu;
