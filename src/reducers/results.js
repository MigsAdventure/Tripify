

export default function results(state = [], action) {
  switch(action.type) {
    // FUlFILLED at the end if using redux-promise-middleware
    case 'RECEIVE_SEARCH_RESULTS_FULFILLED':
      return action.payload.data;
    default:
      return state;
  }
}
