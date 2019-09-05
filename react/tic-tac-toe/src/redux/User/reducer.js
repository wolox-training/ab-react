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

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.VALIDATE_SESSION]: (state, action) => ({
      ...state,
      isLogged: action.payload.isLogged,
      token: action.payload.token
    }),
    [actions.LOGOUT]: state => ({
      ...state,
      isLogged: false,
      token: null
    })
  }
};

export default createReducer(defaultState, completeReducer(reducerDescription));
