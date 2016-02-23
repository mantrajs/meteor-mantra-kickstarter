// import {useDeps} from 'react-simple-di';
// import {composeWithTracker, composeAll} from 'react-komposer';
//
// import {singleComposer} from '../../composers/colors/single.jsx';
import dataComposer from '../../composers/colors/single.jsx';

import Component from '../../components/colors/_single.jsx';

export default dataComposer(Component);

// export default composeAll(
//     composeWithTracker(singleComposer),
//     useDeps()
//   )(Component);
