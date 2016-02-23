import {_colors} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('_colors.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return _colors.find(selector, options);
  });

  Meteor.publish('_colors.single', function (_id) {
    check( _id, String);
    const selector = {_id};
    const response = _colors.find(selector);
    // console.log('publish _colors.single _id', _id);
    // console.log('publish _colors.single response.title', response.title);
    return response;
  });
}
