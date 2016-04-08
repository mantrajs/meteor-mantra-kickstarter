import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const _authComposer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('LOGIN_ERROR');
  onData(null, {error});
  // onData(null, null);

  // clearErrors when unmounting the component
  return clearErrors;
};

export const _authDepsMapper = (context, actions) => ({
  submitAction: actions.Account.login,
  clearErrors: actions.Account.loginErrorClear,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(_authComposer),
    useDeps(_authDepsMapper)
  )(component);
