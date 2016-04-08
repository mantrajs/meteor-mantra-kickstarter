import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const _navHeaderComposer = ({context}, onData) => {

  const {LocalState, authCommon} = context();
  // const {LocalState} = context();

  const {
    userSubReady,
    userId,
    user,
    email,
    profile
  } = authCommon();

  const LoadDummyData = LocalState.get('Developer.LoadDummyData');
  // const DeveloperMode = LocalState.get('Developer.DeveloperMode');

  if (LoadDummyData) {
    onData(null, {
      // notifications,
      // projectlist
    });
  } else {

    onData(null, {
      userSubReady,
      userId,
      user,
      email,
      profile
    });

  }
};

// export const _depsMapper = (context, actions) => ({
export const _depsMapper = (context) => ({
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(_navHeaderComposer),
    useDeps(_depsMapper)
  )(component);
