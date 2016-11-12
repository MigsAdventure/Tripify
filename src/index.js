import React from 'react';
import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import Layout from './components/Layout';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import {  } from './actions/FirebaseActions';
import HomePage from './components/HomePage';

import store from './store';

render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={Layout} >
        <IndexRoute component={HomePage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
