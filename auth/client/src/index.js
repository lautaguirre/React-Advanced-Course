import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import Feature from './components/Feature';
import Signup from './components/auth/Signup';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers, {
    auth: { authenticated: localStorage.getItem('token') }
  }, applyMiddleware(reduxThunk))}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/feature" component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
