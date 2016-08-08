import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import TabIndex from './components/tab_index';
import TabShow from './components/tab_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={TabIndex} />
    <Route path="/tabs" component={TabIndex} />
    <Route path="/tabs/:id" component={TabShow} />
  </Route>
)
