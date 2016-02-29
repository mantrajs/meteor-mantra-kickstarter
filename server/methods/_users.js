import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
// import _ from 'lodash';

export default function () {
  Meteor.methods({

    '_users.add'(data) {

      check(data, {
        email: String,
        profile: {
          firstName: String,
          lastName: String
        }
      });

      data.password = 'test1234';

      // console.log('_users.add data', data);

      // XXX: Do some user authorization

      const _idNew = Accounts.createUser({email: data.email, password: 'test1234', profile: data.profile});
      // console.log('new user created with _id_new', _id_new);

      return { _idNew };

    },

    '_users.update'(data, _id) {
      check(data, {
        firstName: String,
        lastName: String,
        email: String
      });
      check(_id, String);

      //  console.log('_users.update _id', _id);
      //  console.log('_users.update data', data);

      // XXX: Do some user authorization

      let record = Meteor.users.findOne(_id);
      // const allowedFields = ['profile.firstName'];
      // data.forEach(key => record.set(key,data[key]) );

      record.profile.set('firstName', data.firstName);
      record.profile.set('lastName', data.lastName);
      record.emails[0].set('address', data.email);
      record.save();

    },

    '_users.delete'(_id) {
      check(_id, String);
      //  console.log('_users.delete _id', _id);
      if (Meteor.userId() !== _id) {
        let record = Meteor.users.findOne(_id);
        record.remove();
      }
    }
  });
}
