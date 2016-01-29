import React from 'react';

export default React.createClass({

  getDefaultProps() {
    return {
      name: 'noname'
    };
  },

  render() {
    return (
      <div>
        <h3>Simple react component - {this.props.name}</h3>
      </div>
    );
  }
});
