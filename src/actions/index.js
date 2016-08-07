import axios from 'axios';
export const FETCH_TABS = "FETCH_TABS";

const ROOT_URL = "http://app.ultimate-guitar.com/search.php?search_type=title&page=1&iphone=1&value="

export function fetchTabs(search) {
  const request = axios.get('https://crossorigin.me/'+ROOT_URL+search);

  return {
    type: FETCH_TABS,
    payload: request
  };
}
