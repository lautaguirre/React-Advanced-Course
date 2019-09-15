import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

class Signout extends Component {
  componentDidMount() {
    this.props.auth.signout();
  }

  render() {
    return (
      <div>Sorry to see you go</div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    auth: bindActionCreators(actions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Signout);
