import { createTypes, completeTypes } from 'redux-recompose';

import MatchesService from '../../services/MatchesService';

const types = completeTypes(['MATCHES']);
export const actions = createTypes(types, '@@MATCHES');

const getMatches = () => ({
  type: actions.MATCHES,
  target: 'data',
  service: MatchesService.getMatches
});

export default { getMatches };
