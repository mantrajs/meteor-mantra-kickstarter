import React from 'react';

import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';
import AuthComposer from '../../_users/containers/AuthComposer.jsx';

const UserControl = React.createClass({

  render () {

    const {loggedIn, user, email} = this.props;
    return (

      <ul className="nav navbar-nav">
        <li className="dropdown user user-menu">

            <a href="#" className="dropdown-toggle" data-toggle="dropdown">

              <img src="/img/user2-160x160.jpg" className="user-image" alt="User Image" />

              <span className="hidden-xs">email</span>
            </a>

          <ul className="dropdown-menu" role="menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li className="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li className="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>

    )
  }
});

export default UserControl;

// export default composeAll(
//   composeWithTracker(AuthComposer)
//   ,useDeps()
// )(UserControl);
