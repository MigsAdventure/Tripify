import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

import reducer from './reducers';

let middleware = [
  logger(),
  thunkMiddleware,
  promiseMiddleware(),
  // ...
];

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware)
));

export default store;
