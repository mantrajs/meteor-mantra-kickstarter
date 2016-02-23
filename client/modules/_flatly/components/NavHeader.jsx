import React from 'react';

export default React.createClass({

  render() {

    const {brand, leftContent, rightContent} = this.props;

    return (

      <header className="main-header">
        <div className="navbar navbar-inverse navbar-fixed-top">

          <div className="container">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle"
                data-toggle="collapse" data-target=".navbar-inverse-collapse">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="/">{brand ? brand() : 'logo'}</a>
            </div>


            <div className="navbar-collapse collapse navbar-inverse-collapse">

              {leftContent ? leftContent() : null }

              {rightContent ? rightContent() : null }


            </div>


          </div>

        </div>
      </header>

    );
  }
});
