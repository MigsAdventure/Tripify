import axios from 'axios';

export function fetchSearch(searchPackage) {
  return {
    type: 'RECEIVE_SEARCH_RESULTS',
    payload: searchPackage,
    //payload here should be the api call if we use the redux-promise-middleware
  };
}
