import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';
import {Meteor} from 'meteor/meteor';

import {Layout} from '/client/configs/theme.jsx';
import Links from '../../_home/components/links.jsx';
// import Simple from '../../_home/components/simple.jsx';

import Login from '../components/login/wrapper.jsx';
import Register from '../components/register/wrapper.jsx';
import Password from '../components/password/wrapper.jsx';

import Account from '../components/account/wrapper.jsx';
import Profile from '../components/profile/wrapper.jsx';

import UsersCollection from '../components/users/collection.jsx';
import UsersAdd from '../components/users/add.jsx';
import UsersSingle from '../components/users/single.jsx';
import UsersEdit from '../components/users/edit.jsx';



export default (injectDeps) => {

  const LayoutCtx = injectDeps(Layout);

  FlowRouter.route('/register', {
    name: 'users.register',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutCtx, {
        content: () => (<Register />),
        links: () => (<Links />)
      });

    }
  });

  FlowRouter.route('/password', {
    name: 'users.password',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutCtx, {
        content: () => (<Password />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {

      if (Meteor.userId()) {
        FlowRouter.go('/profile');
      }

      mount(LayoutCtx, {
        content: () => (<Login />),
        links: () => (<Links />)
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

      mount(LayoutCtx, {
        content: () => (<Account />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/profile', {
    name: 'users.profile',
    action() {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutCtx, {
        content: () => (<Profile name='users.profile'/>),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/users', {
    name: 'users.collection',
    action() {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutCtx, {
        content: () => (<UsersCollection />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/users/add', {
    name: 'users.add',
    action() {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutCtx, {
        content: () => (<UsersAdd />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/users/:_id', {
    name: '_users.usersSingle',
    action({_id}) {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutCtx, {
        // content: () => (<Simple name='colors.single' />)
        content: () => (<UsersSingle _id={_id}/>),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/users/:_id/edit', {
    name: '_users.usersEdit',
    action({_id}) {

      if (!Meteor.userId()) {
        FlowRouter.go('/login');
      }

      mount(LayoutCtx, {
        // content: () => (<Simple name='colors.single' />)
        content: () => (<UsersEdit _id={_id}/>),
        links: () => (<Links />)
      });
    }
  });
};
