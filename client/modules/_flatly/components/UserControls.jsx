import React from 'react';

export default class extends React.Component {

  getLoggedin() {
    const {email} = this.props;
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle"
            data-toggle="dropdown">{email} <span className="caret"></span></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="/profile">Profile</a></li>
            <li><a href="/account">Account</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    );
  }

  getGuest() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    );
  }

  render() {
    const {loggedIn} = this.props;
    return loggedIn ? this.getLoggedin() : this.getGuest();
  }
}
