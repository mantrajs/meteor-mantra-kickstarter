import React from 'react';

export default class extends React.Component {

  render () {
    return (
      <div>
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
      </div>
    )
  }
}
