
import React from 'react';
import Dropdown from '../components/Dropdown.jsx';
export default () => {


  var links = [];
  links.push({url:'/adminlte', name: 'AdminLTE'});
  links.push( {url:'/adminlte/notifications', name: 'Example notifications page'} );
  const navStart = React.createElement(Dropdown, {name: 'AdminLTE', links: links});

  return (
    <ul className="nav navbar-nav">
      { navStart }
    </ul>
  );
};
