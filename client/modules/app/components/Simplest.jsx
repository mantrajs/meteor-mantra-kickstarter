import React from 'react';

export default class extends React.Component {

  render() {
    const {title} = this.props;

    return (
      <div>
        <h3>{title ? title : 'Simplest react component'}</h3>
      </div>
    );
  }
}
