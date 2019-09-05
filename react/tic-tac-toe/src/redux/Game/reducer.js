import { createReducer } from 'redux-recompose';

/* function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_MATCH:
      return { ...state, matches: [...state.matches, action.payload.data] };
    default:
      return state;
  }
} */
const reducerDescription = {
  ADD_MATCH: (state, action) => ({
    ...state,
    [action.target]: [...state[action.target], action.payload.data]
  })
};

export default createReducer([], reducerDescription);
