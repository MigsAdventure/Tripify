import { combineReducers } from 'redux';

import results from './results';
import auth from './auth';
import user from './user';
import waypoints from './waypoints';

export default combineReducers({ results, auth, user, waypoints });
