import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import reducerMatches from './Matches/reducer';

const mergeReducers = combineReducers({ matches: reducerMatches, form: formReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(mergeReducers, composeEnhancers(applyMiddleware(thunk)));
