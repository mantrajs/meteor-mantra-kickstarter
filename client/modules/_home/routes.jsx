import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import InspiniaLayout from '/client/modules/inspinia/components/Layout.jsx';

import Simple from '/client/modules/inspinia/dummy/simple.jsx';

export const initRoutesHome = (context, actions) => {

  const InspiniaLayoutCtx = injectDeps(context, actions)(InspiniaLayout)

  FlowRouter.route('/home', {
    name: 'home',
    action() {
      mount(InspiniaLayoutCtx, {
        content: () => (<Simple />)
      });
    }
  });





    FlowRouter.route('/simple', {
      name: 'simple',
      action() {
        mount(MainLayoutCtx, {
          content: () => (<Simple />)
        });
      }
    });

    FlowRouter.route('/inspinia', {
      name: 'inspinia',
      action() {
        mount(InspiniaLayoutCtx, {
          content: () => (<Simple />)
        });
      }
    });


    FlowRouter.route('/inspinia2', {
      name: 'inspinia2',
      action() {
        mount(InspiniaLayoutCtx, {
          content: () => (<Simple />)
        });
      }
    });


    FlowRouter.route('/inspinia3', {
      name: 'inspinia3',
      action() {
        mount(InspiniaLayoutCtx, {
          content: () => (<Simple />)
        });
      }
    });


    // FlowRouter.route('/toppp', {
    //   name: 'Simple',
    //   action() {
    //     mount(ToppLayoutCtx, {
    //       content: () => (<Simple />)
    //     });
    //   }
    // });














};
