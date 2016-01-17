
import React from 'react';
import Dropdown from '/client/modules/inspinia/components/Dropdown.jsx';
export default () => {


  var links = [];
  links.push({url:'/', name: 'Start'});
  links.push( {url:'/home', name: '/home'} );
  links.push( {url:'/inspinia', name: 'Inspinia'} );
  links.push( {url:'/posts', name: 'Posts'} );
  links.push( {url:'/new-post', name: 'New post'} );
  links.push( {url:'/home', name: '/home'} );
  // links.push ( {url:'/account', name: 'Account'} );
  // links.push ( {url:'/logout', name: 'Logout'} );
  let navStart = React.createElement(Dropdown, {name: 'Start home!!@', links: links});

  var links = [];
  links.push( {url:'/colors', name: '/colors'} );
  links.push( {url:'/colors/new', name: '/colors/new'} );
  let navColor = React.createElement(Dropdown, {name: 'Colors', links: links});


  var links = [];
  links.push( {url:'/login', name: 'Login'} );
  links.push( {url:'/password', name: 'Forgot passoword'} );
  links.push( {url:'/register', name: 'Register'} );

  links.push( {url:'/account', name: 'Account'} );
  links.push( {url:'/profile', name: 'Logout'} );
  
  let navBlaze = React.createElement(Dropdown, {name: 'Accounts', links: links});


  return (
    <ul className="nav navbar-nav">
      { navStart }
      { navColor }
      { navBlaze }
    </ul>
  );
};
