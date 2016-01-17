import React from 'react';

export default class extends React.Component {

  render () {
    return (
      <section className="content-header">
        <h1>
          Top Navigation
          <small>Example 2.0</small>
        </h1>
        <ol className="breadcrumb">
          <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
          <li><a href="#">Layout</a></li>
          <li className="active">Top Navigation</li>
        </ol>
      </section>
    )
  }
}
