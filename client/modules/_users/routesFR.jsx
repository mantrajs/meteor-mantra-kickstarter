import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import Links from '../_home/components/Links/Links.jsx';
import Simple from '../_home/components/Simple/Simple.jsx';

import LoginFormWrapper from './components/Login/LoginFormWrapper.jsx';
import RegisterFormWrapper from './components/Register/RegisterFormWrapper.jsx';
import PasswordFormWrapper from './components/Password/PasswordFormWrapper.jsx';


export default (Layout) => {

  FlowRouter.route('/register', {
    name: 'users.register',
    action() {

      if (Meteor.userId()) FlowRouter.go('/profile');

      mount(Layout, {
        content: () => (<RegisterFormWrapper />),
        links: () => (<Links />)
      });

    }
  });

  FlowRouter.route('/password', {
    name: 'users.password',
    action() {
      mount(Layout, {
        content: () => (<PasswordFormWrapper />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'users.login',
    action() {
      mount(Layout, {
        content: () => (<LoginFormWrapper />),
        // content: () => (<LoginFormContainer />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/logout', {
    name: 'users.logout',
    action() {
      Accounts.logout();
      FlowRouter.go('/login');
    }
  });

  FlowRouter.route('/account', {
    name: 'users.account',
    action() {
      mount(Layout, {
        content: () => (<Simple name='users.account'/>),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/profile', {
    name: 'users.profile',
    action() {
      mount(Layout, {
        content: () => (<Simple name='users.profile'/>),
        links: () => (<Links />)
      });
    }
  });


};
