import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';

import ColorsList from './components/colors/collection.jsx';
import ColorsView from './components/colors/single.jsx';
import ColorsAdd from './components/colors/add.jsx';
import ColorsEdit from './components/colors/edit.jsx';

export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/colors', {
    name: '_colors.colorsList',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<ColorsList />)
      });
    }
  });

  FlowRouter.route('/colors/add', {
    name: '_colors.colorsAdd',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<ColorsAdd />)
      });
    }
  });

  FlowRouter.route('/colors/:_id', {
    name: '_colors.colorsView',
    action({_id}) {
      mount(LayoutDefaultCtx, {
        content: () => (<ColorsView _id={_id}/>)
      });
    }
  });

  FlowRouter.route('/colors/:_id/edit', {
    name: '_colors.colorsEdit',
    action({_id}) {
      mount(LayoutDefaultCtx, {
        content: () => (<ColorsEdit _id={_id}/>)
      });
    }
  });

};
