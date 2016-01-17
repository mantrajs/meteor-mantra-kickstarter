import React from 'react';

export default class extends React.Component {

  render () {
    return (
      <section className="content-header">
        <h1>
          {this.props.titleBig || 'No title'}
          <small>{this.props.titleSmall|| 'no small'}</small>
        </h1>
      </section>
    )
  }
}
