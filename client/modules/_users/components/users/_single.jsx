import React from 'react';



export default class extends React.Component {
  deleteRecord() {
    // console.log('deleteRecord ', this.props._id);
    this.props.deleteAction(this.props._id);
  }

  render() {
    const {_id, email, firstName, lastName, error} = this.props;

    // const Layout = ({_id=()=>null, email=()=>null, firstName=()=>null, lastName=()=>null}) => (

    return (
      <div>

        {error ?
        <div className="alert alert-danger" onClick="">
          <span className="octicon octicon-megaphone" ></span>
          {error}
        </div> : null }

        <h3>user _id: {_id}</h3>

        <p><strong>first name:</strong> {firstName}</p>
        <p><strong>last name:</strong> {lastName}</p>
        <p><strong>email:</strong> {email}</p>

        <a href={'/users/' + _id + '/edit'}>edit</a> | <a href="#" onClick={this.deleteRecord.bind(this)}>delete</a>
      </div>
    );
  }
}

// export default Layout;
