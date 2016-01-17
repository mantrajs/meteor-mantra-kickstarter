import {Colors} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('colors.list', function () {
  const selector = {};
  const options = {
    fields: {_id: 1, title: 1},
    sort: {createdAt: -1},
    limit: 10
  };

  return Colors.find(selector, options);
});

Meteor.publish('colors.single', function (postId) {
  check(postId, String);
  const selector = {_id: postId};
  return Colors.find(selector);
});
