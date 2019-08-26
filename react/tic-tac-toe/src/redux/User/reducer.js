import { actions } from './actions';

const defaultState = {
  isLogged: false
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.IS_LOGGED:
      return { ...state, isLogged: action.payload };
    case actions.SUCCESS_LOGIN:
    case actions.FAILURE_LOGIN:
      return { ...state };
    default:
      return state;
  }
}

export default reducer;
