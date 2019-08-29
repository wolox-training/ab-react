import { actions } from './actions';

const defaultState = {
  isLogged: false,
  loading: true
};

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actions.IS_LOGGED:
      return { ...state, loading: action.payload.loading, isLogged: action.payload.isLogged };
    case actions.VALIDATE_SESSION:
      return { ...state, loading: action.payload.loading };
    case actions.SUCCESS_LOGIN:
      return { ...state, isLogged: action.payload.isLogged };
    case actions.FAILURE_LOGIN:
      return { ...state, isLogged: action.payload.isLogged };
    default:
      return state;
  }
}

export default reducer;
