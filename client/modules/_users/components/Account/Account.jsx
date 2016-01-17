import React from 'react';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';
import AuthComposer from '../../containers/AuthComposer.jsx';

const TestWithComposer = ({user }) => (

      <div>
        <h3>TestComposer component! {user._id}</h3>


      </div>
);

// export default TestComposer;

export default composeAll(
  composeWithTracker(AuthComposer)
  ,useDeps()
)(TestWithComposer);
