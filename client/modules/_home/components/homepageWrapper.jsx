import React from 'react';
import {Pagetitle} from '/client/configs/theme.jsx';

export default class extends React.Component {
  render() {
    return (
      <div className="bs-docs-section clearfix">

        <Pagetitle title='mantraKickstarter' subtitle='bring your meteor mantra development up to speed'/>

        <div className="row">
          <div className="col-md-12">
            Ut laoreet tempor turpis non malesuada. Nam convallis volutpat massa ac ullamcorper. In ac elementum nulla.
            Morbi est risus, facilisis quis ipsum et, pellentesque mollis orci. Morbi sodales est risus, at luctus diam
            ultrices nec. Nulla ultricies semper arcu, dictum varius neque. Morbi consequat mollis accumsan. Suspendisse
            eget imperdiet dui. Duis malesuada porta massa vitae ultrices. Praesent consectetur in sem non vehicula.
            Nunc a congue magna. Quisque nunc sapien, fringilla ut laoreet ut, porttitor vitae nulla.
          </div>
        </div>
      </div>
    );
  }
}
