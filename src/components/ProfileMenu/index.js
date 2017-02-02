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
        <div className="profile-link" onClick={this.toggleMenu}>
          <img src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/15032174_1260630360666891_8456893431431950772_n.jpg?oh=ca76772d53f7edb1eb087d0ddef96755&oe=59442597" alt="#" className="avatar" />
          <small>First last</small>
        </div>
        <menu className={`panel arrow-center-top ${visible ? 'visible' : ''}`}>
          <div className="menu-item">My profile</div>
          <div className="menu-item">Setting</div>
          <div className="menu-item">Log out</div>
        </menu>
      </div>
    );
  }
}

export default ProfileMenu;
