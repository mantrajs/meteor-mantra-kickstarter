import React from 'react';

export default class extends React.Component {

  render() {

    const {
      displayLoading,
      displayContent
    } = this.props;

    const {
      waitingForAuthData,
    } = this.props;

    if (waitingForAuthData) {
      return displayLoading();
    } else {
      return displayContent();
    }
  }

}
