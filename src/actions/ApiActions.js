import axios from 'axios';

export function fetchSearch(searchPackage) {
  return {
    type: 'RECEIVE_SEARCH_RESULTS',
    payload: axios.get(`/api/places?term=${searchPackage.trip}%20${searchPackage.location}`),
  };
}
