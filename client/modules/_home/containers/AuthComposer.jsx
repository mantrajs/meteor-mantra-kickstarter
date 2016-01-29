import {useDeps} from 'react-simple-di';
import {composeWithTracker, composeAll} from 'react-komposer';
import _ from 'lodash';

const AuthComposer = ({context}, onData) => {

  const {Meteor, Collections, Tracker} = context();

  if (Meteor.subscribe('users.current').ready()) {
    const loggedIn = Meteor.userId() ? true : false;
    const user = Meteor.users.findOne(Meteor.userId());
    const email = _.get(user, 'emails[0].address', null);
    onData(null, {loggedIn, user, email});
  }

};
export default AuthComposer;

// export default composeAll(
//   composeWithTracker(composer),
//   useDeps()
// )(Post);
