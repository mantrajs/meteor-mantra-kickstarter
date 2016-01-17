export default {

  login({Meteor, LocalState, FlowRouter}, email, password) {

    if (!email || !password) {
      return LocalState.set('LOGIN_ERROR', 'Login & Password are required!');
    }

    LocalState.set('LOGIN_ERROR', null);

    Meteor.loginWithPassword(email, password, (err,res) => {
      if (err && err.reason) {
        return LocalState.set('LOGIN_ERROR', err.reason);
      } else {
        FlowRouter.go('/home');
      }
    });

  },

  loginErrorClear({LocalState}) {
    return LocalState.set('LOGIN_ERROR', null);
  },


  register({Meteor, LocalState, FlowRouter}, email, password1, password2) {

    if (!email || !password1 || !password2) {
      return LocalState.set('REGISTER_ERROR', 'Please fill out all the required fileds!');
    }

    if (password1 != password2 ) {
      return LocalState.set('REGISTER_ERROR', 'Passwords do not match!');
    }

    Accounts.createUser({email: email, password: password1}, (err,res) => {
      if (err && err.reason) {
          return LocalState.set('REGISTER_ERROR', err.reason);
      } else {
        FlowRouter.go('/home');
      }
    });
  },

  registerErrorClear({LocalState}) {
    return LocalState.set('REGISTER_ERROR', null);
  },

};
