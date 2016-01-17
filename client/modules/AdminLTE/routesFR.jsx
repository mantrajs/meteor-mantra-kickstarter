import React from 'react';
import {injectDeps} from 'react-simple-di';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';


import Links from '../_home/components/Links/Links.jsx';
// import Links from './starters/Links.jsx';
import PageHeader from './components/PageHeader.jsx';
import Simple from '../_home/components/Simple/Simple.jsx';


import PageNotifications from './pages/Notifications.jsx';

export default (Layout) => {

  FlowRouter.route('/adminlte/', {
    name: 'adminlte.full',
    action() {
      mount(Layout, {
        content: () => (<Simple name='renders properly'/>)
        ,pageHeader: () => (<PageHeader titleBig="AdminLTE" titleSmall="base page" />)
        ,links: () => (<Links />)
      });
    }
  });

  FlowRouter.route('/adminlte/notifications', {
    name: 'adminlte.notifications',
    action() {
      mount(Layout, {
        content: () => (<PageNotifications />)
        ,pageHeader: () => (<PageHeader titleBig="Notifications page" titleSmall="3 notification examples" />)
        ,links: () => (<Links />)
      });
    }
  });


};
