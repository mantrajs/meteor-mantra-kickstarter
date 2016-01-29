import React from 'react';
import {Dropdown} from '/client/configs/theme.jsx';
import {Meteor} from 'meteor/meteor';

export default () => {

  const links1 = [];
  links1.push({url: '/', name: '/'});
  links1.push({url: '/home', name: '/home'} );
  let navStart = React.createElement(Dropdown, {name: 'Start', links: links1});

  var links2 = [];
  links2.push({url: '/colors', name: '/colors'} );
  links2.push({url: '/colors/add', name: '/colors/add'} );
  let navColors = React.createElement(Dropdown, {name: 'Colors', links: links2});

  var links3 = [];
  links3.push({url: '/posts', name: '/posts'} );
  links3.push({url: '/new-post', name: '/new-post'} );
  let navPosts = React.createElement(Dropdown, {name: 'Posts', links: links3});

  var links4 = [];
  links4.push({url: '/users', name: '/users'} );
  links4.push({url: '/users/add', name: '/users/add'} );
  let navAdmin = React.createElement(Dropdown, {name: 'Admin', links: links4});

  var links5 = [];
  links5.push({url: '/login', name: 'Login'} );
  links5.push({url: '/password', name: 'Forgot passoword'} );
  links5.push({url: '/register', name: 'Register'} );
  links5.push({url: '/Logout', name: 'Logout'} );

  links5.push({url: '/account', name: 'Account'} );
  links5.push({url: '/profile', name: 'Profile'} );

  let navAccounts = React.createElement(Dropdown, {name: 'Accounts', links: links5});

  return (
    <ul className="nav navbar-nav">
      { navStart }
      { navColors }
      { navPosts }
      { navAccounts }
      { Meteor.userId() ? navAdmin : null }
    </ul>
  );

};
