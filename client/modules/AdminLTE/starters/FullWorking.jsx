import React from 'react';


export default class extends React.Component {

  componentWillMount() {
    $('body').addClass('hold-transition skin-black layout-top-nav');
  }

  componentWillUnmount() {
    $('body').removeClass('top-navigation');
  }

  render () {
    return (

        <div className="wrapper">

          <header className="main-header">
            <nav className="navbar navbar-static-top">
              <div className="container">
                <div className="navbar-header">
                  <a href="../../index2.html" className="navbar-brand"><b>Admin</b>LTE</a>
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
                  <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                      <input type="text" className="form-control" id="navbar-search-input" placeholder="Search" />
                    </div>
                  </form>
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

          <div className="content-wrapper">
            <div className="container">

              <section className="content-header">
                <h1>
                  Top Navigation
                  <small>Example 2.0</small>
                </h1>
                <ol className="breadcrumb">
                  <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
                  <li><a href="#">Layout</a></li>
                  <li className="active">Top Navigation</li>
                </ol>
              </section>


              <section className="content">
                <div className="callout callout-info">
                  <h4>Tip!</h4>
                  <p>Add the layout-top-nav class to the body tag to get this layout. This feature can also be used with a sidebar! So use this class if you want to remove the custom dropdown menus from the navbar and use regular links instead.</p>
                </div>
                <div className="callout callout-danger">
                  <h4>Warning!</h4>
                  <p>The construction of this layout differs from the normal one. In other words, the HTML markup of the navbar and the content will slightly differ than that of the normal layout.</p>
                </div>
                <div className="box box-default">
                  <div className="box-header with-border">
                    <h3 className="box-title">Blank Box</h3>
                  </div>
                  <div className="box-body">
                    The great content goes here
                  </div>
                </div>
              </section>
            </div>
          </div>
          <footer className="main-footer">
            <div className="container">
              <div className="pull-right hidden-xs">
                <b>Version</b> 2.3.0
              </div>
              <strong>Copyright &copy; 2014-2015 <a href="http:.com">Almsaeed Studio</a>.</strong> All rights reserved.
            </div>
          </footer>
        </div>
    )
  }
}
