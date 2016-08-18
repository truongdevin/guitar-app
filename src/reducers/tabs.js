import { FETCH_TABS, FETCH_TAB } from "../actions/index";

const INITIAL_STATE = { all: null, selected: null };

import { parseString } from 'xml2js';

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_TABS:
      var jsonResult;
      parseString(action.payload.data, (err, result) => jsonResult = result.results.result);
      return { ...state, all: jsonResult };

    case FETCH_TAB:
      return { ...state, selected: action.payload.data };

    default:
      return state;
  }
}
