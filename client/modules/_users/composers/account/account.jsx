// import ColorSingle from '../components/ColorsSingle/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor} = context();

  Meteor.subscribe('users.current',() => {
    const record = Meteor.users.findOne(Meteor.userId());
    onData(null, {record});
  });

};

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps()
  )(component);
