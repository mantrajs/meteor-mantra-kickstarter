import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import {Layout} from '/client/configs/theme.jsx';
import Links from '../../_home/components/links.jsx';
// import Simple from '../../_home/components/simple.jsx';

import ColorsList from '../components/colors/collection.jsx';
import ColorsView from '../components/colors/single.jsx';
import ColorsAdd from '../components/colors/add.jsx';
import ColorsEdit from '../components/colors/edit.jsx';


export default (injectDeps) => {

  const LayoutCtx = injectDeps(Layout);

  FlowRouter.route('/colors', {
    name: '_colors.colorsList',
    action() {
      mount(LayoutCtx, {
        // content: () => (<Simple name='colors.collection' />)
        content: () => (<ColorsList />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/colors/add', {
    name: '_colors.colorsAdd',
    action() {
      mount(LayoutCtx, {
        // content: () => (<Simple name='colors.new' />)
        content: () => (<ColorsAdd />),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/colors/:_id', {
    name: '_colors.colorsView',
    action({_id}) {
      mount(LayoutCtx, {
        // content: () => (<Simple name='colors.single' />)
        content: () => (<ColorsView _id={_id}/>),
        links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/colors/:_id/edit', {
    name: '_colors.colorsEdit',
    action({_id}) {
      mount(LayoutCtx, {
        // content: () => (<Simple name='colors.single' />)
        content: () => (<ColorsEdit _id={_id}/>),
        links: () => (<Links />)
      });
    }
  });

};
