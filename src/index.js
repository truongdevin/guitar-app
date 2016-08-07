import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';
import reducers from './reducers/index';

import SearchBar from './components/search_bar.js';

const store = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <SearchBar />
  </Provider>
  , document.getElementById('root')
);
