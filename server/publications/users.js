import {Colors} from '/libs/collections';
// import {Posts} from '/libs/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

// Meteor.publish('posts.list', function () {
//   const selector = {};
//   const options = {
//     fields: {_id: 1, title: 1},
//     sort: {createdAt: -1},
//     limit: 10
//   };
//
//   return Posts.find(selector, options);
// });

Meteor.publish('users.current', function (_id) {
  // check(postId, String);
  // const selector = {_id: postId};
  // return Posts.find(selector);

  // if (this.userId) {
  const  response = Meteor.users.find(
    {
      _id: _id
      // _id: this.userId
    }
  );

  console.log ('publish users.current _id', _id);
  console.log ('publish users.current this.userId', this.userId);
  return response;


});
