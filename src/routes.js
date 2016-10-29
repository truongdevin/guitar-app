import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MusicIndex from './components/music_index';
import GuitarShow from './components/guitar_show';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MusicIndex} />
    <Route path="/guitar/:id" component={GuitarShow} />
  </Route>
)
