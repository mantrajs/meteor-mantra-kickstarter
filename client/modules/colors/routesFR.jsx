import React from 'react';

import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import Links from '../_home/components/Links/Links.jsx';
import Simple from '../_home/components/Simple/Simple.jsx';


import ColorsCollection from './containers/ColorsCollection.jsx';
import ColorsNew from './containers/ColorsNew.jsx';
import ColorsSingle from './containers/ColorsSingle.jsx';


export default (Layout) => {

  // const LayoutCtx = injectDeps(context, actions)(Layout)


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
