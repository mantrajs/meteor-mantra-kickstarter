import React from 'react';
// import classNames from 'classnames';

export default ({links = [], name = 'Empty name'}) => (
  <li className="dropdown">
    <a href="#" className="dropdown-toggle"
      data-toggle="dropdown">{name} <b className="caret"></b></a>
    <ul className="dropdown-menu" >

      {
        links.map((link, index) => {
          link.classes = link.classes ? link.classes : {};
          link.url = link.url ? link.url : '';
          link.name = link.name ? link.name : '';
          // let classes = classNames(link.classes);

          let response = '';
          if (link.url) {
            response = <li key={index}><a href={link.url}>{link.name}</a></li>;
          } else {
            response = <li key={index}>{link.name}</li>;
          }
          return response;
        })
      }

    </ul>
  </li>
);
