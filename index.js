import React from 'react';
import { Router, browserHistory, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './app/routes.js';
import store from './app/store/store.js';

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.getElementById('main'));