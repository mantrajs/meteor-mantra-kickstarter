import React from 'react';

import dataComposer from '../../lib/AccountLogin.js';
import Component from './Component.jsx';
const ComponentCtx = dataComposer(Component);

export default class extends React.Component {

  render() {
    return (
      <div className="bs-docs-section clearfix">
          <div className="row">

              <div className="col-md-6">
                  <h2 className="font-bold">Welcome</h2>

                  <p>Ut laoreet tempor turpis non malesuada.
                    Nam convallis volutpat massa ac ullamcorper.
                  </p>


              </div>
              <div className="col-md-6">
                  <div className="ibox-content">

                    <h2 className="font-bold">Login</h2>
                    <p>
                        Enter your email address and your password.
                    </p>


                    <ComponentCtx />

                    <a href="/password">
                        <small>Forgot password?</small>
                    </a>

                    <p className="text-muted text-center">
                        <small>Do not have an account?</small>
                    </p>
                    <a className="btn btn-sm btn-white btn-block" href="/register">Create an account</a>


                  </div>
              </div>
          </div>
          <hr/>
      </div>

    );
  }
}
