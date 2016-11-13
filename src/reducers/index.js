import { combineReducers } from 'redux';

import results from './results';
import auth from './auth';

export default combineReducers({ results, auth });
