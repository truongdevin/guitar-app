import axios from 'axios';
export const FETCH_TABS = "FETCH_TABS";
export const FETCH_TAB = "FETCH_TAB";


export function fetchTabs(search) {
  const ROOT_URL = "http://app.ultimate-guitar.com/search.php?search_type=title&page=1&iphone=1&value=";
  const request = axios.get('https://crossorigin.me/'+ROOT_URL+search);

  return {
    type: FETCH_TABS,
    payload: request
  };
}

export function fetchTab(id) {
  const ROOT_URL = "http://app.ultimate-guitar.com/iphone/tab.php?id=";
  const request = axios.get('https://crossorigin.me/'+ROOT_URL+id);

  return {
    type: FETCH_TAB,
    payload: request
  };
}
