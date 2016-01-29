// import ColorSingle from '../components/ColorsSingle/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  Meteor.subscribe('users.current',() => {
    const record = Meteor.users.findOne(Meteor.userId());
    onData(null, {record});
  });

  // // support latency compensation
  // //  we don't need to invalidate tracker because of the
  // //  data fetching from the cache.
  // const fromCache = Tracker.nonreactive(() => {
  //   return Meteor.users.findOne(_Id);
  // });
  //
  // if (fromCache) {
  //   onData(null, {record: fromCache});
  // } else {
  //   onData();
  // }
};

export default (component) => composeAll(
    composeWithTracker(composer),
    useDeps()
  )(component);
