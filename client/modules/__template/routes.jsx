import React from 'react';
import {mount} from 'react-mounter';

import {
  LayoutDefault,
  Simple
} from '/client/configs/theme.jsx';

export default function (injectDeps, {FlowRouter}) {

  const LayoutDefaultCtx = injectDeps(LayoutDefault);

  FlowRouter.route('/template', {
    name: 'left',
    action() {
      mount(LayoutDefaultCtx, {
        content: () => (<Simple name='left'/>),
      });
    }
  });

};
