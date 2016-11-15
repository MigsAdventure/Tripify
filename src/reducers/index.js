import { combineReducers } from 'redux';

import results from './results';
import auth from './auth';
import user from './user';

export default combineReducers({ results, auth, user });
