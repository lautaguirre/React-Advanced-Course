import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import * as actions from '../../actions/index';

class Signin extends Component {
  onSubmit = (form) => {
    this.props.auth.signin(form, () => {
      this.props.history.push('/feature');
    });
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

        <div>
          {this.props.errorMessage}
        </div>

        <button>Sign in!</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    auth: bindActionCreators(actions, dispatch),
  }
};

const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'Signin' })
)(Signin);
