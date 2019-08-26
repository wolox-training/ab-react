import { actions } from './actions';

function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_MATCH:
      return { ...state, matches: [...state.matches, action.payload.data] };
    default:
      return state;
  }
}
export default reducer;
