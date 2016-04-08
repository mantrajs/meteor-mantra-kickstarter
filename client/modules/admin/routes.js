import React from 'react';
import {mount} from 'react-mounter';


import {
  AuthCheck,
  LayoutDefault,
  Simplest,
} from '/client/configs/components.js';

export default function (injectDeps, {FlowRouter}) {

  const AuthCheckCtx = injectDeps(AuthCheck);

  FlowRouter.route('/admin', {
    name: 'admin.home',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Simplest title="This is admin module"/>)
      });
    }
  });

  FlowRouter.route('/users', {
    name: 'admin.users',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Simplest title="Users list"/>)
      });
    }
  });


  FlowRouter.route('/users/add', {
    name: 'admin.users.add',
    action() {
      mount(AuthCheckCtx, {
        LayoutDefault, content: () => (<Simplest title="Add user"/>)
      });
    }
  });


}
