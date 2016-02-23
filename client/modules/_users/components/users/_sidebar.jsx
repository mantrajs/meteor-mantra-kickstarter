import React from 'react';

export default class extends React.Component {

  render() {
    return (
      <div className="box box-solid">
        <div className="box-header with-border">
          <h3 className="box-title">Admin</h3>
        </div>
        <div className="box-body no-padding">
          <ul className="nav nav-pills nav-stacked">
            <li><a href="/users"><i className="fa "></i> Users collection</a></li>
            <li><a href="/users/add"><i className="fa "></i> Add user</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
