import { createReducer, completeState, completeReducer } from 'redux-recompose';

import { actions } from './actions';
// import { actions } from './actions';

/* const defaultState = {
  data: []
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.LOAD_MATCHES:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
} */

const defaultState = completeState({
  data: []
});

const reducerDescription = {
  primaryActions: [actions.MATCHES]
};

export default createReducer(defaultState, completeReducer(reducerDescription));
