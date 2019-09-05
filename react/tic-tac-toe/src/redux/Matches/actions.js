import { createTypes, completeTypes } from 'redux-recompose';

import MatchesService from '../../services/MatchesService';

/* export const actions = {
  GET_MATCHES: '@@MATCHES/GET_MATCHES',
  LOAD_MATCHES: '@@MATCHES/LOAD_MATCHES'
};
 */

const types = completeTypes(['MATCHES']);
export const actions = createTypes(types, '@@MATCHES');

/* const loadMatches = data => ({
  type: actions.LOAD_MATCHES,
  target: 'matches',
  payload: { data }
}); */

const getMatches = () => ({
  type: actions.MATCHES,
  target: 'data',
  service: MatchesService.getMatches
});

/* const fetchMatches = () => async dispatch => {
  dispatch(getMatches());
  const { ok, data } = await MatchesService.getMatches();
  if (ok) {
    dispatch(loadMatches(data));
  }
}; */

export default { getMatches };
