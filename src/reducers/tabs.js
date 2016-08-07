import { FETCH_TABS, fetchTabs } from "../actions/index";

const INITIAL_STATE = { all: [], selected: null };

import { parseString } from 'xml2js';

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_TABS:
      var jsonResult;
      parseString(action.payload.data, (err, result) => jsonResult = result.results.result);
      return { ...state, all: jsonResult };
    default:
      return state;
  }
}
