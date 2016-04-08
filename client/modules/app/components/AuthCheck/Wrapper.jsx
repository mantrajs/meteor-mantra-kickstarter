import React from 'react';

import Component from './Component.jsx';
import {authComposer} from '/client/configs/composers.js';
const ComponentCtx = authComposer(Component);

import AuthLoading from '../AuthLoading/Wrapper.jsx';
import AuthDenied from '../AuthDenied/Wrapper.jsx';
import AccountLogin from '../AccountLogin/Wrapper.jsx';

export default class extends React.Component {

  render() {

    const {
      content,
      LayoutDefault,
      // LayoutComponent
    } = this.props;

    const displayLoading = () => (
      <LayoutDefault
        content={() => (<AuthLoading />)}
      />
    );

    const displayLogin = () => (
      <LayoutDefault
        content={() => (<AccountLogin />)}
      />
    );

    const displayDenied = () => (
      <LayoutDefault
        content={() => (<AuthDenied />)}
      />
    );

    const displayContent = () => (
      <LayoutDefault
        content={content}
      />
    );

    return (
      <ComponentCtx
        {...this.props}
        displayLoading={displayLoading}
        displayLogin={displayLogin}
        displayDenied={displayDenied}
        displayContent={displayContent}
      />
    );
  }
}
