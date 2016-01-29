import {initContext} from './configs/context';
import routes from './configs/routes.jsx';
import {createApp} from './libs/mantra';

import coreModule from './modules/core';
import commentsModule from './modules/comments';

import _homeModule from './modules/_home';
import _homeRoutes from './modules/_home/configs/routes.jsx';

import _usersModule from './modules/_users';
import _usersRoutes from './modules/_users/configs/routes.jsx';

import _colorsModule from './modules/_colors';
import _colorsRoutes from './modules/_colors/configs/routes.jsx';


const context = initContext();

const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);

app.loadModule(_homeModule);
app.loadModule(_usersModule);
app.loadModule(_colorsModule);

app.loadRoutes(_homeRoutes);
app.loadRoutes(_usersRoutes);
app.loadRoutes(_colorsRoutes);

app.loadRoutes(routes);
