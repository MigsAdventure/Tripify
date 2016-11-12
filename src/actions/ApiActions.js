import axios from 'axios';

export function fetchSearch(searchPackage) {
  console.log('searchPackage:', searchPackage);
  return {
    type: 'RECEIVE_SEARCH_RESULTS',
    payload: axios.get(`/api/places?term=${searchPackage.trip}%20${searchPackage.location}`),
    //payload here should be the api call if we use the redux-promise-middleware
  };
}
