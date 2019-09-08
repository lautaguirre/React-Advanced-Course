import React from 'react';
import ReacDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from 'Root';
import App from 'components/App';

ReacDOM.render((
  <Root>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Root>
), document.getElementById('root'));
