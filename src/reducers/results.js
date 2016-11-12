

export default function results(state = [], action) {
  switch(action.type) {
    // FUlFILLED at the end if using redux-promise-middleware
    case 'RECEIVE_SEARCH_RESULTS_FULFILLED':
    console.log('action.payload:', action.payload);
      return action.payload.data;
    default:
      return state;
  }
}
