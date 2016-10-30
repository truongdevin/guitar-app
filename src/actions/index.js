import axios from 'axios';
export const FETCH_GUITAR = "FETCH_GUITAR";
export const FETCH_PIANO = "FETCH_PIANO";
export const FETCH_GUITAR_SHEET = "FETCH_GUITAR_SHEET";
export const FETCH_PIANO_SHEET = "FETCH_PIANO_SHEET";
export const FETCH_ARTIST = "FETCH_ARTIST";
export const SET_INSTRUMENT = "SET_INSTRUMENT";

const CORS_PROXY_REQUIRED = true;
const CORS_PROXY = CORS_PROXY_REQUIRED ? "https://crossorigin.me/" : "";

export function fetchGuitar(search) {
  const ROOT_URL = "https://app.ultimate-guitar.com/search.php?search_type=title&page=1&iphone=1&value=";
  const request = axios.get(CORS_PROXY+ROOT_URL+search);

  return {
    type: FETCH_GUITAR,
    payload: request
  };
}

export function fetchGuitarSheet(id) {
  const ROOT_URL = "https://app.ultimate-guitar.com/iphone/tab.php?id=";
  const request = axios.get(CORS_PROXY+ROOT_URL+id);

  return {
    type: FETCH_GUITAR_SHEET,
    payload: request
  };
}

export function fetchPiano(search) {
  const ROOT_URL = "https://api.musescore.com/services/rest/score.json&oauth_consumer_key=wx3Sss3Wm2ChzqFNiyEPQy5R2ffVgRqZ&part=0&text=";
  const request = axios.get(CORS_PROXY+ROOT_URL+search);

  return {
    type: FETCH_PIANO,
    payload: request
  };
}

export function fetchPianoSheet(id) {
  const ROOT_URL = "https://musescore.com/oembed/endpoint?url=https://musescore.com/score/";
  const request = axios.get(CORS_PROXY+ROOT_URL+id+'&maxheight=700');

  return {
    type: FETCH_PIANO_SHEET,
    payload: request
  };
}

export function fetchArtist(name) {
  const ROOT_URL = "http://www.theaudiodb.com/api/v1/json/1/search.php?s=";
  const request = axios.get(CORS_PROXY+ROOT_URL+name);

  return {
    type: FETCH_ARTIST,
    payload: request
  };
}

export function setInstrument(instrument) {
  return {
    type: SET_INSTRUMENT,
    payload: instrument
  };
}
