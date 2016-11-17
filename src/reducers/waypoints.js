export default function (state = [], action) {
  switch (action.type) {
    case 'SET_WAYPOINTS':
      return [...action.payload];
    default:
      return state;
  }
}
