
import React from 'react';
// import Dropdown from '/client/modules/inspinia/components/Dropdown.jsx';
import Dropdown from '../../../AdminLTE/components/Dropdown.jsx';

export default () => {

  var links = [];
  links.push({url:'/', name: '/Start'});
  links.push( {url:'/home', name: '/home'} );
  let navStart = React.createElement(Dropdown, {name: 'Start', links: links});

  var links = [];
  links.push( {url:'/colors', name: '/colors'} );
  links.push( {url:'/colors/new', name: '/colors/new'} );
  let navColor = React.createElement(Dropdown, {name: 'Colors', links: links});


  var links = [];
  links.push( {url:'/login', name: 'Login'} );
  links.push( {url:'/password', name: 'Forgot passoword'} );
  links.push( {url:'/register', name: 'Register'} );
  links.push( {url:'/Logout', name: 'Logout'} );

  links.push( {url:'/account', name: 'Account'} );
  links.push( {url:'/profile', name: 'Profile'} );

  let navBlaze = React.createElement(Dropdown, {name: 'Accounts', links: links});


  var links = [];
  links.push( {url:'/adminlte/notifications', name: 'Notifications'} );

  let navTheme = React.createElement(Dropdown, {name: 'Theme', links: links});



  return (
    <ul className="nav navbar-nav">

      { navStart }
      { navColor }
      { navBlaze }
      { navTheme }
      
    </ul>
  );
};
