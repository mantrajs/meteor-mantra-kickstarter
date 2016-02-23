import React from 'react';
import DropDown from './DropDown.jsx';

export default () => {

  var links2 = [];
  links2.push({url: '/colors', name: '/colors'} );
  links2.push({url: '/colors/add', name: '/colors/add'} );
  let navColors = React.createElement(DropDown, {name: 'Colors', links: links2});

  var links4 = [];
  links4.push({url: '/users', name: '/users'} );
  links4.push({url: '/users/add', name: '/users/add'} );
  let navAdmin = React.createElement(DropDown, {name: 'Admin', links: links4});

  var links5 = [];
  links5.push({url: '/login', name: 'Login'} );
  links5.push({url: '/password', name: 'Forgot passoword'} );
  links5.push({url: '/register', name: 'Register'} );
  links5.push({url: '/Logout', name: 'Logout'} );

  links5.push({url: '/account', name: 'Account'} );
  links5.push({url: '/profile', name: 'Profile'} );

  let navAccounts = React.createElement(DropDown, {name: 'Accounts', links: links5});

  return (
    <ul className="nav navbar-nav">

      <li className="">
        <a aria-expanded="false" role="button" href="/" target="">Start</a>
      </li>

      <li className="">
        <a aria-expanded="false" role="button" href="/new-post" target="">New post</a>
      </li>

      { navColors }
      { navAccounts }
      { Meteor.userId() ? navAdmin : null }
    </ul>
  );

};
