import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signup extends Component {
  onSubmit = (form) => {
    console.log(form);
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

Signup = reduxForm({
  form: 'signup'
})(Signup);

export default Signup;
