import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducerMatches from './Matches/reducer';
import reducerUser from './User/reducer';

export const history = createBrowserHistory();

const createRootReducer = combineReducers({
  router: connectRouter(history),
  matches: reducerMatches,
  user: reducerUser,
  form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), thunk)));
  return store;
}
