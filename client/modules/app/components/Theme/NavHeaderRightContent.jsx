import React from 'react';

// import authComposer from '/client/configs/composers.js';
import UserControls from './UserControls.jsx';

// const UserControlsCtx = authComposer(UserControls);

export default class extends React.Component {



  render() {

    const {
      userSubReady,
      userId,
      user,
      email,
      profile
    } = this.props;

    return (
      <UserControls
        {...this.props}
        classVersion="navbar-nav"
        />
    )
  }
}
