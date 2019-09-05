import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

import * as actions from 'actions';

class App extends Component {
  renderButton = () => {
    const { auth, changeAuth } = this.props;

    if (auth) {
      return (
        <button onClick={() => changeAuth(false)}>
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={() => changeAuth(true)}>
          Sign In
        </button>
      );
    }
  }

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, actions)(App);
