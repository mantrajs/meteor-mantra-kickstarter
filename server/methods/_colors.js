import {_colors} from '/lib/collections';
// import {_color} from '/lib/color.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// import _ from 'lodash';
export default function () {
  Meteor.methods({

    '_colors.add'(data, _id) {
      check(data, {
        title: String,
        content: String
      });
      check(_id, String);

      // console.log('_colors.add data', data);

      // XXX: Do some user authorization

      data._id = _id;
      data.createAt = new Date();
      // const object = {_id, data.title, data.content, createdAt};
      _colors.insert(data);
    },

    '_colors.update'(data, _id) {
      check(data, {
        title: String,
        content: String
      });
      check(_id, String);

      // console.log ('_colors.update _id', _id);
      // console.log ('_colors.update data', data);

      // XXX: Do some user authorization

      let record = _colors.findOne(_id);
      const allowedFields = [ 'title','content' ];
      allowedFields.forEach(key => record.set(key,data[key]) );
      record.save(allowedFields);

      // console.log ('_colors.update record', record);

    },

    '_colors.delete'(_id) {
      check(_id, String);
      //  console.log('_colors.delete _id', _id);
      let record = _colors.findOne(_id);
      record.remove();
    }
  });
}
