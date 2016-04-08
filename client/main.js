import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import commentsModule from './modules/comments';

import appModule from './modules/app';
import adminModule from './modules/admin';
import colorsModule from './modules/colors';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);

app.loadModule(appModule);
app.loadModule(adminModule);
app.loadModule(colorsModule);

app.init();
