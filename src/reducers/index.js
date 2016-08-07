import { combineReducers } from 'redux';
import Tabs from './tabs.js';

const rootReducer = combineReducers({
  tabs: Tabs
});

export default rootReducer;
