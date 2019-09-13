import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import * as actions from '../../actions/index';

class Signup extends Component {
  onSubmit = (form) => {
    this.props.auth.signup(form)
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
          />
        </fieldset>
        <button>Sign up!</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    auth: bindActionCreators(actions, dispatch),
  }
};

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'signup' })
)(Signup);
