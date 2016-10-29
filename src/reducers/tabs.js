import { FETCH_GUITAR, FETCH_GUITAR_SHEET, FETCH_PIANO, FETCH_PIANO_SHEET, FETCH_ARTIST, SET_INSTRUMENT } from "../actions/index";
import { parseString } from 'xml2js';

const INITIAL_STATE = {
  all: null,
  selected: null,
  artist: null,
  instrument: "Guitar"
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {

    case FETCH_GUITAR:
      var jsonResult;
      parseString(action.payload.data, (err, result) => jsonResult = result.results.result);
      return { ...state, all: jsonResult };

    case FETCH_GUITAR_SHEET:
      return { ...state, selected: action.payload.data };

    case FETCH_PIANO:
      if (action.payload.data.length === 0) action.payload.data = undefined;
      return { ...state, all: action.payload.data };

    case FETCH_PIANO_SHEET:
      return { ...state, selected: action.payload.data };

    case FETCH_ARTIST:
      return { ...state, artist: action.payload.data };

    case SET_INSTRUMENT:
      return { ...state, instrument: action.payload, all: null };

    default:
      return state;
  }
}
