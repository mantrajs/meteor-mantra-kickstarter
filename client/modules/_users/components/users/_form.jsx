import React from 'react';
import t from 'tcomb-form';
// import _ from 'lodash';

export default React.createClass({


  submitForm(event) {
    event.preventDefault();
    var values = this.refs.form.getValue();
    if (values) {
      // console.log('submitForm values', values);
      if (this.props._id) {
        this.props.submitAction(values, this.props._id);
      } else {
        this.props.submitAction(values);
      }
    }
  },

  onChange() {
    this.refs.form.getValue(); // <- validate on every change
  },

  render() {

    const formModel = t.struct({
      firstName: t.String,
      lastName: t.String,
      email: t.String
      // ,content: t.maybe(t.String)
    });

    const formOptions = {
      config: {
      },
      fields: {
        // title : {
        //
        // }
        // ,content: {
        //   type: 'textarea'
        //   ,label: 'To jest kontent'
        //   ,attrs: {
        //     rows :3
        //   }
        // }
      }
    };

    const debug = true;
    // const {_id, error, record, email } = this.props;
    const {_id, error, email } = this.props;

    const defaultValues = {
      ...this.props
    };

    const Form = t.form.Form;

    const formTitle = _id ? 'Edit ' + email : 'Add new record';
    const buttonLabel = 'Save';

    return (
      <div>

          <h3>{formTitle}</h3>

          {error ?
          <div className="alert alert-danger" onClick="">
            <span className="octicon octicon-megaphone" ></span>
            {error}
          </div> : null }

          <Form ref="form"
            type={formModel}
            options={formOptions}
            onChange={this.onChange}
            value={defaultValues}
          />

        <button className="btn btn-primary" onClick={this.submitForm}>{buttonLabel}</button>
        {debug ? <button className="btn btn-primary" onClick={this.componentLog}>component log</button> : null }

      </div>
    );
  }
});
