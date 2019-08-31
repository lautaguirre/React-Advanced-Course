import React from 'react';
import ReacDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from 'reducers';

import App from 'components/App';

ReacDOM.render((
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>
), document.getElementById('root'));
