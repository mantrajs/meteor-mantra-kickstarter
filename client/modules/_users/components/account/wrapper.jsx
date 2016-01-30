import React from 'react';

// import dataComposer from '../../composers/account/account.jsx';
// import Component from './_form.jsx';
//
// const Container = dataComposer(Component);

export default class extends React.Component {

  render() {
    return (
      <div className="bs-docs-section clearfix">
          <div className="row">

              <div className="col-md-6">
                  <h2 className="font-bold">Welcome</h2>

                  <p>
                    Ut laoreet tempor turpis non malesuada. Nam convallis volutpat massa ac ullamcorper.
                    In ac elementum nulla. Morbi est risus, facilisis quis ipsum et, pellentesque mollis
                    orci. Morbi sodales est risus, at luctus diam ultrices nec. Nulla ultricies semper
                    arcu, dictum varius neque. Morbi consequat mollis accumsan. Suspendisse eget imperdiet dui.
                    Duis malesuada porta massa vitae ultrices. Praesent consectetur in sem non vehicula.
                    Nunc a congue magna. Quisque nunc sapien, fringilla ut laoreet ut, porttitor vitae nulla.
                  </p>


              </div>
              <div className="col-md-6">
                  <div className="ibox-content">

                    <h3>Account page</h3>



                  </div>
              </div>
          </div>
          <hr/>
      </div>

    );
  }
}
