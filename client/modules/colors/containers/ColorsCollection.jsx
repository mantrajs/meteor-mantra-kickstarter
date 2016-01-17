import ColorsList from '../components/ColorsCollection/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('colors.list').ready()) {
    const collection = Collections.Colors.find().fetch();
    onData(null, {collection});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ColorsList);
