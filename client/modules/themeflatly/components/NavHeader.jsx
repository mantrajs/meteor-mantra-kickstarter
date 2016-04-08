import React from 'react';

import {navHeaderComposer} from '/client/configs/composers.js';

import NavHeaderBrand from '/client/modules/app/components/Theme/NavHeaderBrand.jsx';
import NavHeaderLeftContent from '/client/modules/app/components/Theme/NavHeaderLeftContent.jsx';
import NavHeaderRightContent from '/client/modules/app/components/Theme/NavHeaderRightContent.jsx';

const NavHeaderLeftContentCtx = navHeaderComposer(NavHeaderLeftContent);
const NavHeaderRightContentCtx = navHeaderComposer(NavHeaderRightContent);

export default React.createClass({

  render() {

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
              <a className="navbar-brand" href="/"><NavHeaderBrand /></a>
            </div>


            <div className="navbar-collapse collapse navbar-inverse-collapse">

              <NavHeaderLeftContentCtx />

              <NavHeaderRightContentCtx />


            </div>


          </div>

        </div>
      </header>

    );
  }
});
