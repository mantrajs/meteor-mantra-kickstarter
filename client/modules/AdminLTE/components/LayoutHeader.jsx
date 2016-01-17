import React from 'react';

import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';
import AuthComposer from '../../_users/containers/AuthComposer.jsx';


import UserControl from './UserControl.jsx';

const LayoutHeader = React.createClass ({

  renderUserControl() {
    const {loggedIn, user, email} = this.props;

    if (loggedIn) {
      return (
        <ul className="nav navbar-nav">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">{email} <span className="caret"></span></a>
            <ul className="dropdown-menu" role="menu">
              <li><a href="/profile">Profile</a></li>
              <li><a href="/account">Account</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
          </li>
        </ul>
      )
    } else {
      return (

        <ul className="nav navbar-nav">
          <li><a href="/register">Register</a></li>
          <li><a href="/login">Login</a></li>
        </ul>

      )
    }

  },

  render () {

    const {loggedIn, user, email} = this.props;

    return (

      <header className="main-header">
        <nav className="navbar navbar-static-top">

          <div className="container">

              <div className="navbar-header">
                <a href="/" className="navbar-brand"><b>mantra</b>APPStarter</a>
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                  <i className="fa fa-bars"></i>
                </button>
              </div>

              <div className="collapse navbar-collapse pull-left" id="navbar-collapse">


                  {this.props.children}

              </div>


              <div className="navbar-custom-menu " id="navbar-collapse">
                {this.renderUserControl() }
              </div>

          </div>

        </nav>
      </header>

    )
  }
});

// export default LayoutHeader;

export default composeAll(
  composeWithTracker(AuthComposer)
  ,useDeps()
)(LayoutHeader);
