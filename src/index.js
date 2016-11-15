import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import Layout from './components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import MyTripsPage from './components/MyTripsPage';

import HomePage from './components/HomePage';
import ResultsPage from './components/ResultsPage';
import { initAuth } from './actions/FirebaseActions';
import store from './store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <MuiThemeProvider >
    <Provider store={store}>
      <Router history={browserHistory} >
        <Route path="/" component={Layout} >
          <IndexRoute component={HomePage} />
          <Route path="search-results" component={ResultsPage} />
          <Route path="/my-trips" component={MyTripsPage}></Route>
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

initAuth(store.dispatch);
