import MatchesService from '../../services/MatchesService';

export const actions = {
  GET_MATCHES: '@@MATCHES/GET_MATCHES',
  LOAD_MATCHES: '@@MATCHES/LOAD_MATCHES'
};

const loadMatches = data => ({
  type: actions.LOAD_MATCHES,
  payload: { data }
});

const getMatches = () => ({
  type: actions.GET_MATCHES
});

const fetchMatches = () => async (dispatch) => {
  dispatch(getMatches());
  const { ok, data } = await MatchesService.getMatches();
  if (ok) {
    dispatch(loadMatches(data));
  }
};

export default { fetchMatches };
