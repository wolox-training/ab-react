export const actions = {
  ADD_MATCH: '@@GAME/ADD_MATCH'
};

const actionsCreators = {
  addMatch: data => ({
    type: actions.ADD_MATCH,
    payload: { data }
  })
};

export default actionsCreators;
