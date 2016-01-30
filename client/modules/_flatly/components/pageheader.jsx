import React from 'react';

export default class extends React.Component {

  render() {
    const {title} = this.props;
    return (
      <div className="page-header">
        <div className="row">
          <div className="col-lg-12">
            <h1 id="buttons">{title}</h1>
          </div>
        </div>
      </div>
    );
  }
}
