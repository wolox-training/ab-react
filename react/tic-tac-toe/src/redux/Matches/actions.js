export const actions = {
  GET_MATCHES: '@@MATCHES/GET_MATCHES'
};

const actionsCreators = {
  getMatches: data => ({
    type: actions.GET_MATCHES,
    payload: { data }
  })
};

export default actionsCreators;
