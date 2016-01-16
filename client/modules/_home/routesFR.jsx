import React from 'react';

import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

// import Layout from '/client/modules/inspinia/components/Layout.jsx';
// import Links from '/client/modules/inspinia/components/Links.jsx';

import Links from '/client/modules/_home/components/Links.jsx';

import Simple from '/client/modules/_home/components/Simple.jsx';
import LoginForm from '/client/modules/_home/components/LoginForm.jsx';

import ColorsCollection from '/client/modules/_home/containers/ColorsCollection.jsx';
import ColorsNew from '/client/modules/_home/containers/ColorsNew.jsx';
import ColorsSingle from '/client/modules/_home/containers/ColorsSingle.jsx';

// import Test from '/client/modules/_home/containers/Test.jsx';

export const initRoutesHome = (Layout) => {

  // const LayoutCtx = injectDeps(context, actions)(Layout)

  FlowRouter.route('/home', {
    name: 'home',
    action() {
      mount(Layout, {
        content: () => (<Simple />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/register', {
    name: 'home',
    action() {
      mount(Layout, {
        content: () => (<Simple />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'home',
    action() {
      mount(Layout, {
        content: () => (<LoginForm/>),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/colors', {
    name: 'colors.collection',
    action() {
      mount(Layout, {
        content: () => (<ColorsCollection />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/colors/new', {
    name: 'colors.new',
    action() {
      mount(Layout, {
        content: () => (<ColorsNew />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/colors/:_Id', {
    name: 'colors.single',
    action({_Id}) {
      mount(Layout, {
        content: () => (<ColorsSingle _Id={_Id}/>),
        links: () => (<Links />)
      });
    }
  });


};
