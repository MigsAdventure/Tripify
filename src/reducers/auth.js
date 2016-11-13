const initialState = {
  authenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'INIT_AUTH_SUCCESS':
    case 'SIGN_IN_SUCCESS':
      return Object.assign({}, state, {
        authenticated: true,
        user: action.payload,
      });
    case 'SIGN_OUT_SUCCESS':
      return initialState;
    default:
      return state;
  }
}
