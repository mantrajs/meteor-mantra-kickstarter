import React from 'react';

export default class extends React.Component {

  exit(path = '/') {
    const {displayLoading} = this.props;

    setTimeout(function() {
      FlowRouter.go(path);
    }, 0);
    return displayLoading();
  }

  render() {

    const {
      displayLoading,
      displayContent,

      userId,
      requireUserId,
      requireNotLoggedIn,

    } = this.props;

    const {
      waitingForAuthData,
    } = this.props;

    if (waitingForAuthData) {
      return displayLoading();
    } else {

      if (userId && requireNotLoggedIn) {
        return this.exit();
      }

      if (!userId && requireUserId) {
        return this.exit();
      }

      return displayContent();
    }
  }

}
