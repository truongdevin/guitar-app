import { FETCH_TABS, FETCH_TAB, FETCH_ARTIST, SET_INSTRUMENT } from "../actions/index";
import { parseString } from 'xml2js';

const INITIAL_STATE = {
  all: null,
  selected: null,
  artist: null,
  instrument: "Guitar",
  img: "url('./imgs/guitar/guitar1.jpg')"
};

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_TABS:
      var jsonResult;
      parseString(action.payload.data, (err, result) => jsonResult = result.results.result);
      return { ...state, all: jsonResult };

    case FETCH_TAB:
      return { ...state, selected: action.payload.data };

    case FETCH_ARTIST:
      return { ...state, artist: action.payload.data };

    case SET_INSTRUMENT:
      if (action.payload === "Guitar") {
        var img = `url('./imgs/guitar/guitar${Math.floor((Math.random() * 2)+1)}.jpg')`;
      } else {
        var img = `url('./imgs/piano/piano${Math.floor((Math.random() * 3)+1)}.jpg')`;
      }
      return { ...state, instrument: action.payload, img: img };

    default:
      return state;
  }
}
