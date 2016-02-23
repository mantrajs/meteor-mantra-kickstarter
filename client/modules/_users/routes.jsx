import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';


import Login from './components/login/wrapper.jsx';
import Register from './components/register/wrapper.jsx';
import Password from './components/password/wrapper.jsx';

import Account from './components/account/wrapper.jsx';
import Profile from './components/profile/wrapper.jsx';

import UsersCollection from './components/users/collection.jsx';
import UsersAdd from './components/users/add.jsx';
import UsersSingle from './components/users/single.jsx';
import UsersEdit from './components/users/edit.jsx';

export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/register', {
    name: 'users.register',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Register />)
      });

    }
  });

  FlowRouter.route('/password', {
    name: 'users.password',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Password />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Login />)
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      // Accounts.logout();
      Meteor.logout(() => {
        FlowRouter.go('/login');
      });
    }
  });

  FlowRouter.route('/account', {
    name: 'users.account',
    action() {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Account />)
      });
    }
  });

  FlowRouter.route('/profile', {
    name: 'users.profile',
    action() {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<Profile name='users.profile'/>)
      });
    }
  });

  FlowRouter.route('/users', {
    name: 'users.collection',
    action() {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<UsersCollection />)
      });
    }
  });

  FlowRouter.route('/users/add', {
    name: 'users.add',
    action() {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<UsersAdd />)
      });
    }
  });

  FlowRouter.route('/users/:_id', {
    name: '_users.usersSingle',
    action({_id}) {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<UsersSingle _id={_id}/>),
      });
    }
  });

  FlowRouter.route('/users/:_id/edit', {
    name: '_users.usersEdit',
    action({_id}) {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutDefaultCtx, {
        content: () => (<UsersEdit _id={_id}/>)
      });
    }
  });

};
