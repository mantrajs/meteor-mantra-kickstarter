import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  displayName: 'LoginScreen',
  styles: {
    smContainer: {
      maxWidth: 400,
      marginTop: 50
    },
    panelHeading: {
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 3
    },
    signUp: {
      textAlign: 'center',
      marginTop: 15
    },
    gapRight: {
      marginRight: 5
    }
  },
  getInitialState() {
    return {
      loginErrorMessage: null
    };
  },
  loginHandler(evt) {
    evt.preventDefault();
    let email = ReactDOM.findDOMNode(this.refs.emailFc).value.trim();
    let pw = ReactDOM.findDOMNode(this.refs.passwordFc).value.trim();
    if (email && (email !== '') && pw && (pw !== '')) {
      Meteor.loginWithPassword(email, pw, (err,res) => {
        if (err && err.reason) {
          this.setState({
            loginErrorMessage: err.reason
          });
        }
      });
    } else {
      this.setState({
        loginErrorMessage: 'Please fill in the fields!'
      });
    }
  },
  signUpHandler(evt) {
    evt.preventDefault();
    let email = ReactDOM.findDOMNode(this.refs.emailFc).value.trim();
    let pw = ReactDOM.findDOMNode(this.refs.passwordFc).value.trim();
    if (email && (email !== '') && pw && (pw !== '')) {
      Accounts.createUser({email: email, password: pw}, (err,res) => {
        if (err && err.reason) {
          this.setState({
            loginErrorMessage: err.reason
          });
        }
      });
    } else {
      this.setState({
        loginErrorMessage: 'Please fill in the fields!'
      });
    }
  },
  renderErrorMessage(msg) {
    var removeMessage = () => {
      this.setState({
        loginErrorMessage: null
      });
    };
    return (
      <div className="alert alert-danger" onClick={removeMessage}>
        <span className="octicon octicon-megaphone" style={this.styles.gapRight}></span>
        {msg}
      </div>
    );
  },
  render() {
    var errorMessage;
    if (this.state.loginErrorMessage) {
      errorMessage = this.renderErrorMessage(this.state.loginErrorMessage);
    }
    return (
      <div className="container" style={this.styles.smContainer}>
        <div className="panel panel-default">
          <div className="panel-heading" style={this.styles.panelHeading}>
            <h3>Sign in</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.loginHandler}>
              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" ref="emailFc"></input>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" ref="passwordFc"></input>
              </div>
              <button className="btn btn-success btn-block">sign in</button>
              <div style={this.styles.signUp}>
                <button className="btn btn-link" onClick={this.signUpHandler}>or create Account</button>
              </div>
            </form>
          </div>
        </div>
        {errorMessage}
      </div>
    );
  }
});
