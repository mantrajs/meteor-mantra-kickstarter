import React from 'react';
import Sidebar from './_sidebar.jsx';

// import Container from '../../containers/colors/edit.jsx';
import dataComposer from '../../composers/colors/edit.jsx';
import Component from './_form.jsx';
const Container = dataComposer(Component);

export default class extends React.Component {

  render() {
    const {_id} = this.props;
    return (
      <div className="bs-docs-section clearfix">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Container _id={_id}/>
          </div>
        </div>
      </div>
    );
  }
}
