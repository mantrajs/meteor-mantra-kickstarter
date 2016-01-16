import React from 'react';

const FormBlaze = BlazeToReact('atForm');

const atFormReact = ({atFormState = () => null }) => (

  <div>
    <div className="wrapper wrapper-content  animated fadeInRight">
      <div className="row">
          <div className="container">
            <FormBlaze state= {atFormState} />
          </div>
      </div>
    </div>
  </div>

);

export default atFormReact;
