
import React from 'react';

export default React.createClass ({

  render () {
    return (

      <header className="main-header">
        <nav className="navbar navbar-static-top">

          <div className="container">

              <div className="navbar-header">
                <a href="/" className="navbar-brand"><b>mantra</b>AppStarter</a>
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                  <i className="fa fa-bars"></i>
                </button>
              </div>


              <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                  <li><a href="#">Link</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li className="divider"></li>
                      <li><a href="#">Separated link</a></li>
                      <li className="divider"></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="navbar-custom-menu">
                <ul className="nav navbar-nav">

                  <li className="dropdown messages-menu">

                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-envelope-o"></i>
                      <span className="label label-success">4</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="header">You have 4 messages</li>
                      <li>

                        <ul className="menu">
                          <li>
                            <a href="#">
                              <div className="pull-left">

                                <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                              </div>

                              <h4>
                                Support Team
                                <small><i className="fa fa-clock-o"></i> 5 mins</small>
                              </h4>

                              <p>Why not buy a new awesome theme?</p>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="footer"><a href="#">See All Messages</a></li>
                    </ul>
                  </li>


                  <li className="dropdown notifications-menu">

                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                      <i className="fa fa-bell-o"></i>
                      <span className="label label-warning">10</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="header">You have 10 notifications</li>
                      <li>

                        <ul className="menu">
                          <li>
                            <a href="#">
                              <i className="fa fa-users text-aqua"></i> 5 new members joined today
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="footer"><a href="#">View all</a></li>
                    </ul>
                  </li>

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

          </div>

        </nav>
      </header>

    )
  }
});
