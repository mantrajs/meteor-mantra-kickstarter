import React from 'react';
import {injectDeps} from 'react-simple-di';

import loadMethodStubs from './configs/method_stubs';
import {initContext} from './configs/context';

import {initRoutes} from './configs/routes.jsx';

import actions from './actionsCombined.js';

import initRoutesHome from './modules/_home/routesFR.jsx';
import initRoutesUsers from './modules/_users/routesFR.jsx';
import initRoutesColors from './modules/colors/routesFR.jsx';

// import initRoutesInspinia from './modules/inspinia/routesFR.jsx';
import initRoutesAdminLTE from './modules/AdminLTE/routesFR.jsx';

// import Layout from '/client/components/layouts.main/index.jsx';
// import Layout from '/client/modules/_home/components/Layout/JustContent.jsx';
import Layout from '/client/modules/AdminLTE/components/Layout.jsx';
// import Layout from '/client/modules/inspinia/components/Layout.jsx';

loadMethodStubs();
const context = initContext();
const LayoutCtx = injectDeps(context, actions)(Layout);

initRoutes(LayoutCtx);
initRoutesHome(LayoutCtx);
initRoutesUsers(LayoutCtx);
initRoutesColors(LayoutCtx);
// initRoutesInspinia(LayoutCtx);
initRoutesAdminLTE(LayoutCtx);
