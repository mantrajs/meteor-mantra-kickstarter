// import {useDeps} from 'react-simple-di';
// import {composeWithTracker, composeAll} from 'react-komposer';
//
// import {addComposer, depsMapper} from '../../composers/colors/add.jsx';
import dataComposer from '../../composers/colors/add.jsx';

import Component from '../../components/colors/_form.jsx';

export default dataComposer(Component);

// export default composeAll(
//     composeWithTracker(addComposer),
//     useDeps(depsMapper)
//   )(Component);
