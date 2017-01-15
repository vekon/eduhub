import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import eduHubReducers from '../reducers';

let middleware = applyMiddleware(promise)(createStore);
let store = middleware(eduHubReducers);

export default store;