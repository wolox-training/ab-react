import { createReducer, completeState, completeReducer } from 'redux-recompose';

import { actions } from './actions';

const defaultState = completeState({
  data: []
});

const reducerDescription = {
  primaryActions: [actions.MATCHES]
};

export default createReducer(defaultState, completeReducer(reducerDescription));
