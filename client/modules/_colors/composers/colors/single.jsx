import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const singleComposer = ({context, _id, clearErrors}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  const error = LocalState.get('_colors.DELETE_ERROR');
  if (Meteor.subscribe('_colors.single', _id).ready()) {
    const record = Collections._colors.findOne(_id);
    if (record) {
      onData(null, {record, error});
    } else {
      // FlowRouter.go('/colors');
    }
  }
  // clearErrors when unmounting the component
  return clearErrors;

};

export const depsMapper = (context, actions) => ({
  deleteAction: actions._colors.delete,
  clearErrors: actions._colors.clearErrors,
  context: () => context
});

export default (component) => composeAll(
    composeWithTracker(singleComposer),
    useDeps(depsMapper)
  )(component);
