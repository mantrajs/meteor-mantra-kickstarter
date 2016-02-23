import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('users.collection', function () {
    const selector = {};
    const options = {
      // fields: {_id: 1, title: 1},
      sort: {createdAt: -1},
      limit: 10
    };
    const response = Meteor.users.find(selector, options);
    return response;
  });

  Meteor.publish('users.single', function (_id) {
    check(_id, String);
    const selector = {_id};
    const response = Meteor.users.find(selector);
    // console.log ('publish users.single _id', _id);
    // console.log ('publish users.single response', response);
    return response;
  });

  Meteor.publish('users.current', function (_id) {
    // check(_id, String);
    // if (this.userId) {
    const selector = {_id};
    const response = Meteor.users.find(selector);
    // console.log ('publish users.current _id', _id);
    // console.log ('publish users.current this.userId', this.userId);
    return response;
  });
}
