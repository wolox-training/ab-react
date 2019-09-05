// import { actions } from './actions';
import { createReducer, completeState, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const defaultState = completeState(
  {
    isLogged: false,
    token: null
  },
  ['isLogged']
);

/* function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.IS_LOGGED:
      return { ...state, loading: action.payload.loading, isLogged: action.payload.isLogged };
    case actions.VALIDATE_SESSION:
      return { ...state, loading: action.payload.loading };
    case actions.SUCCESS_LOGIN:
    case actions.FAILURE_LOGIN:
    case actions.LOGOUT:
      return { ...state, isLogged: action.payload.isLogged };
    default:
      return state;
  }
} */

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.VALIDATE_SESSION]: (state, action) => ({ ...state, isLogged: action.payload.isLogged })
  }
};

export default createReducer(defaultState, completeReducer(reducerDescription));
