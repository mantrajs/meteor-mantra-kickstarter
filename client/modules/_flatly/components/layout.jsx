import React from 'react';

// import Navheader from './navigation2.jsx';
import Navheader from './navheader.jsx';

export default class extends React.Component {

  render() {
    return (
      <div>

        <Navheader>
          {this.props.links ? this.props.links() : ''}
        </Navheader>

        <div className="container">


            {this.props.content()}


        </div>

      </div>
    );
  }
}
