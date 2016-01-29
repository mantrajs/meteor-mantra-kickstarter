export default () => {

  if (Meteor.users.find().count() === 0 ) {
    console.log('lets create some users');

    const first_id = Accounts.createUser({
      email: 'test@test.com'
      ,password: 'test1234'
      // ,profile: {
      //   firstName: 'Austin',
      //   lastName: 'Powers',
      // }
    });

  }
};
