import React from 'react';

export default class extends React.Component {

  render() {
    const {title, subtitle} = this.props;

    return (
      <div className="page-header" id="banner">
        <div className="row">
          <div className="col-lg-6">
            <h1>{title}</h1>
            <p className="lead">{subtitle ? subtitle : ''}</p>
          </div>
        </div>
      </div>
    );
  }
}
