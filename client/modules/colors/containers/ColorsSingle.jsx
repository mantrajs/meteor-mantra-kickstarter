import ColorSingle from '../components/ColorsSingle/index.jsx';
import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';

export const composer = ({context, _Id}, onData) => {
  const {Meteor, Collections, Tracker} = context();

  Meteor.subscribe('colors.single', _Id, () => {
    const record = Collections.Colors.findOne(_Id);
    onData(null, {record});
  });

  // support latency compensation
  //  we don't need to invalidate tracker because of the
  //  data fetching from the cache.
  const fromCache = Tracker.nonreactive(() => {
    return Collections.Colors.findOne(_Id);
  });

  if (fromCache) {
    onData(null, {record: fromCache});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ColorSingle);
