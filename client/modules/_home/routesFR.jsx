import React from 'react';

import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import Links from './components/Links/Links.jsx';

import Simple from './components/Simple/Simple.jsx';

import TestWithComposer from './components/Prototypes/TestWithComposer.jsx';
import TestForm from './components/Prototypes/TestForm.jsx';

// import Test from '/client/modules/_home/containers/Test.jsx';

export default (Layout) => {

  // const LayoutCtx = injectDeps(context, actions)(Layout)

  FlowRouter.route('/home', {
    name: 'home',
    action() {
      mount(Layout, {
        content: () => (<Simple name='home container'/>),
        links: () => (<Links />)
      });
    }
  });

  /// Prototypes

  FlowRouter.route('/loginworking', {
    name: 'user.login.working',
    action() {
      mount(Layout, {
        content: () => (<Simple />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/prototypes/form', {
    name: 'test.form',
    action() {
      mount(Layout, {
        content: () => (<TestForm />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/prototypes/composer', {
    name: 'test.composer',
    action() {
      mount(Layout, {
        content: () => (<TestWithComposer />),
        links: () => (<Links />)
      });
    }
  });





};
