import { createTypes } from 'redux-recompose';

export const actions = createTypes(['ADD_MATCH'], 'GAME');

const actionsCreators = {
  addMatch: data => ({
    type: actions.ADD_MATCH,
    target: 'match',
    payload: { data }
  })
};

export default actionsCreators;
