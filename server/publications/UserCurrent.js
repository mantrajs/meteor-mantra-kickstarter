import {Meteor} from 'meteor/meteor';

export default function () {

  Meteor.publish('users.current', function () {
    return Meteor.users.find(this.userId);
  });
}
