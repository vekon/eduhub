import React from 'react';
import { render } from 'react-dom';
import App from './app/app.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import eduHubReducers from './app/reducers';
import promise from 'redux-promise';

let middleware = applyMiddleware(promise)(createStore);
let store = middleware(eduHubReducers);

render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('main'));