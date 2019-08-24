import { actions } from './actions';

const defaultState = {
  isLogged: false
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.SUCCESS_LOGIN:
    case actions.FAILURE_LOGIN:
      return { ...state, isLogged: action.payload };
    default:
      return state;
  }
}

export default reducer;
