import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers/index';

import TabIndex from './components/tab_index';

const store = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <TabIndex />
  </Provider>
  , document.getElementById('root')
);
