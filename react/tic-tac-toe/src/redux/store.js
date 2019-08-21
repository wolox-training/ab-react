import { createStore, compose } from 'redux';

import reducerMatches from './Matches/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default createStore(reducerMatches, composeEnhancers());
