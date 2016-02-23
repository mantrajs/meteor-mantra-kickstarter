import React from 'react';
import Sidebar from './_sidebar.jsx';


// import Container from '../../containers/colors/collection.jsx';
import dataComposer from '../../composers/colors/collection.jsx';
import Component from './_collection.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Container />
          </div>
        </div>
      </div>
    );
  }
}
