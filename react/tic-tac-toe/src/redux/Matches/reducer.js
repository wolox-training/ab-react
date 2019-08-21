import { actions } from './actions';

const defaultState = {
  data: []
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.GET_MATCHES:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}

export default reducer;
