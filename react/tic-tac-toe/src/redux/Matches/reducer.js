import { createReducer } from 'redux-recompose';

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

const reducerDescription = {
  LOAD_MATCHES: (state, action) => ({
    ...state,
    [action.target]: action.payload.data
  })
};

export default createReducer([], reducerDescription);
