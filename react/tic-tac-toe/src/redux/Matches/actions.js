import { createTypes } from 'redux-recompose';

import MatchesService from '../../services/MatchesService';

/* export const actions = {
  GET_MATCHES: '@@MATCHES/GET_MATCHES',
  LOAD_MATCHES: '@@MATCHES/LOAD_MATCHES'
};
 */

export const actions = createTypes(['GET_MATCHES', 'LOAD_MATCHES'], '@@MATCHES');

/* const loadMatches = data => ({
  type: actions.LOAD_MATCHES,
  target: 'matches',
  payload: { data }
}); */

const getMatches = () => ({
  type: actions.GET_MATCHES,
  target: 'matches',
  payload: MatchesService.getMatches()
});

/* const fetchMatches = () => async dispatch => {
  dispatch(getMatches());
  const { ok, data } = await MatchesService.getMatches();
  if (ok) {
    dispatch(loadMatches(data));
  }
}; */

export default { getMatches };
