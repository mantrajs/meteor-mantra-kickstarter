import React from 'react';
import {Dropdown} from '/client/configs/theme.jsx';

export default () => {

  var links = [];
  links.push({url:'/', name: '/'});
  links.push( {url:'/home', name: '/home'} );
  let navStart = React.createElement(Dropdown, {name: 'Start', links: links});

  var links = [];
  links.push( {url:'/colors', name: '/colors'} );
  links.push( {url:'/colors/add', name: '/colors/add'} );
  let navColors = React.createElement(Dropdown, {name: 'Colors', links: links});

  var links = [];
  links.push( {url:'/posts', name: '/posts'} );
  links.push( {url:'/new-post', name: '/new-post'} );
  let navPosts = React.createElement(Dropdown, {name: 'Posts', links: links});

  var links = [];
  links.push( {url:'/users', name: '/users'} );
  links.push( {url:'/users/add', name: '/users/add'} );
  let navAdmin = React.createElement(Dropdown, {name: 'Admin', links: links});

  var links = [];
  links.push( {url:'/login', name: 'Login'} );
  links.push( {url:'/password', name: 'Forgot passoword'} );
  links.push( {url:'/register', name: 'Register'} );
  links.push( {url:'/Logout', name: 'Logout'} );

  links.push( {url:'/account', name: 'Account'} );
  links.push( {url:'/profile', name: 'Profile'} );

  let navAccounts = React.createElement(Dropdown, {name: 'Accounts', links: links});

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
