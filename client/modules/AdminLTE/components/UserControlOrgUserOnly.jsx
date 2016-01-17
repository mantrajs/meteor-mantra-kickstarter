import React from 'react';

export default class extends React.Component {

  render () {
    return (
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">

          <li className="dropdown tasks-menu">

            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-flag-o"></i>
              <span className="label label-danger">9</span>
            </a>
            <ul className="dropdown-menu">
              <li className="header">You have 9 tasks</li>
              <li>

                <ul className="menu">
                  <li>
                    <a href="#">

                      <h3>
                        Design some buttons
                        <small className="pull-right">20%</small>
                      </h3>

                      <div className="progress xs">

                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>

          <li className="dropdown user user-menu">

            <a href="#" className="dropdown-toggle" data-toggle="dropdown">

              <img src="../../dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />

              <span className="hidden-xs">Alexander Pierce</span>
            </a>
            <ul className="dropdown-menu">

              <li className="user-header">
                <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>

              <li className="user-body">
                <div className="col-xs-4 text-center">
                  <a href="#">Followers</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#">Sales</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#">Friends</a>
                </div>
              </li>

              <li className="user-footer">
                <div className="pull-left">
                  <a href="#" className="btn btn-default btn-flat">Profile</a>
                </div>
                <div className="pull-right">
                  <a href="#" className="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>


        </ul>
      </div>

    )
  }
}
