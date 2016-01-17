import React from 'react';
import LayoutHeader from './LayoutHeader.jsx';

import LayoutFooter from './LayoutFooter.jsx';


export default class extends React.Component {

  componentWillMount() {
    $('body').addClass('hold-transition skin-black-light layout-top-nav');

    //Get window height and the wrapper height


  }

  componentWillUnmount() {
    $('body').removeClass('top-navigation');
  }

  componentDidMount () {

    $(function() {
      console.log( "ready!" );

      var neg = $('.main-header').outerHeight() + $('.main-footer').outerHeight();
      var window_height = $(window).height();
      var sidebar_height = $(".sidebar").height();
      //Set the min-height of the content and sidebar based on the
      //the height of the document.
      if ($("body").hasClass("fixed")) {
        $(".content-wrapper, .right-side").css('min-height', window_height - $('.main-footer').outerHeight());
      } else {
        var postSetWidth;
        if (window_height >= sidebar_height) {
          $(".content-wrapper, .right-side").css('min-height', window_height - neg);
          postSetWidth = window_height - neg;
        } else {
          $(".content-wrapper, .right-side").css('min-height', sidebar_height);
          postSetWidth = sidebar_height;
        }
      }

    });
  }

  render () {
    return (

        <div className="wrapper">

          <LayoutHeader >

            {this.props.links ? this.props.links() : ''}

          </LayoutHeader>

          <div className="content-wrapper">
            <div className="container">

              {this.props.pageHeader ? this.props.pageHeader() : ''}

              <section className="content">

                {this.props.content()}

              </section>

            </div>
          </div>

          <LayoutFooter />

        </div>
    )
  }
}
