import {Meteor} from 'meteor/meteor';

export default () => {
  if (Meteor.users.find().count() === 0 ) {
    Accounts.createUser({
      email: 'test@test.com',
      password: 'test1234'
    });
  }
};
