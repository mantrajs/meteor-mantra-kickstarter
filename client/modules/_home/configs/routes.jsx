import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import {Layout} from '/client/configs/theme.jsx';
import Links from '../components/links.jsx';
import Simple from '../components/simple.jsx';

export default (injectDeps) => {

  const LayoutCtx = injectDeps(Layout);
  // const LayoutCtx = injectDeps(context, actions)(Layout)

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(LayoutCtx, {
        content: () => (<Simple name='/approot'/>),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/home', {
    name: 'home',
    action() {
      mount(LayoutCtx, {
        content: () => (<Simple name='home container'/>),
        links: () => (<Links />)
      });
    }
  });


};
