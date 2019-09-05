import { SubmissionError } from 'redux-form';
import { completeTypes, createTypes, withPostFailure, withPostSuccess } from 'redux-recompose';

import AuthService from '../../services/AuthService';
import LocalStoreService from '../../services/LocalStoreService';

const types = completeTypes(['LOGIN'], ['VALIDATE_SESSION']);
export const actions = createTypes(types, '@@USER');

/* const logoutAction = () => async dispatch => {
  await LocalStoreService.clearStorage();
  dispatch(logout());
};
*/

const isLogged = value => ({
  type: actions.VALIDATE_SESSION,
  target: 'isLogged',
  payload: { isLogged: value }
});

const logged = () => {
  const token = LocalStoreService.getValue('token');
  return {
    type: actions.VALIDATE_SESSION,
    target: 'isLogged',
    payload: { isLogged: !!token, token }
  };
};

const loginAction = values => ({
  type: actions.LOGIN,
  target: 'token',
  service: AuthService.login,
  payload: values,
  successSelector: response => response.data.token,
  injections: [
    withPostSuccess((dispatch, response) => {
      const localStore = new LocalStoreService();
      localStore.setValue('token', response);
      AuthService.setToken(response);
      dispatch(isLogged(true));
    }),
    withPostFailure(dispatch => {
      dispatch(isLogged(false));
      throw new SubmissionError({ _error: 'Nombre de usuario y contraseña no coinciden' });
    })
  ]
});

export default { login: loginAction, logged };
