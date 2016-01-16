import React from 'react';
import {injectDeps} from 'react-simple-di';

import loadMethodStubs from './configs/method_stubs';
import {initContext} from './configs/context';

import {initRoutes} from './configs/routes.jsx';
// import actions from './actions';
import actions from './actionsCombined.js';

import {initRoutesInspinia} from './modules/inspinia/routesFR.jsx';
import {initRoutesHome} from './modules/_home/routesFR.jsx';

import Layout from '/client/modules/inspinia/components/Layout.jsx';

loadMethodStubs();
const context = initContext();
const LayoutCtx = injectDeps(context, actions)(Layout);
// initRoutes(context, actions);
initRoutes(LayoutCtx);
initRoutesHome(LayoutCtx);
// initRoutesInspinia(context, actions);
