import { SubmissionError } from 'redux-form';
import { completeTypes, createTypes, withPostFailure, withPostSuccess } from 'redux-recompose';

import AuthService from '../../services/AuthService';
import LocalStoreService from '../../services/LocalStoreService';

/* export const actions = {
  SUCCESS_LOGIN: '@@USER/SUCCESS_LOGIN',
  FAILURE_LOGIN: '@@USER/FAILURE_LOGIN',
  IS_LOGGED: '@@USER/IS_LOGGED',
  LOGOUT: '@@USER/LOGOUT',
  VALIDATE_SESSION: '@@USER/VALIDATE_SESSION'
}; */

const types = completeTypes(['LOGIN'], ['VALIDATE_SESSION']);
export const actions = createTypes(types, '@@USER');

/* const loginSuccess = () => ({
  type: actions.SUCCESS_LOGIN,
  payload: { isLogged: true }
}); */

/* const logout = () => ({
  type: actions.LOGOUT,
  payload: { isLogged: false }
});

const validateSession = () => ({
  type: actions.VALIDATE_SESSION,
  payload: { loading: true }
}); */

/* const loginFailure = () => ({
  type: actions.FAILURE_LOGIN,
  payload: { isLogged: false }
}); */

/* const isLogged = value => ({
  type: actions.IS_LOGGED,
  payload: { isLogged: value, loading: false }
}); */

/* const loginAction = values => async dispatch => {
  const {
    ok,
    data: { token }
  } = await AuthService.login(values);
  if (ok) {
    const localStore = new LocalStoreService();
    localStore.setValue('token', token);
    AuthService.setToken(token);
    dispatch(loginSuccess());
  } else {
    dispatch(loginFailure());
    throw new SubmissionError({ _error: 'Nombre de usuario y contraseña no coinciden' });
  }
}; */

/* const logoutAction = () => async dispatch => {
  await LocalStoreService.clearStorage();
  dispatch(logout());
};

const logged = () => async dispatch => {
  dispatch(validateSession());
  const token = await LocalStoreService.getValue('token');
  AuthService.setToken(token);
  dispatch(isLogged(!!token));
}; */

// export default { login: loginAction, logged, logout: logoutAction };

/* const isLogged = value => ({
  type: actions.LOGIN,
  payload: { isLogged: value }
}); */

const isLogged = value => ({
  type: actions.VALIDATE_SESSION,
  target: 'isLogged',
  payload: { isLogged: value }
});

const logged = () => ({
  type: actions.LOGIN,
  target: 'token',
  service: LocalStoreService.getValue,
  successSelector: response => response.data.token,
  payload: 'token',
  injections: [
    withPostSuccess((dispatch, response) => {
      AuthService.setToken(response);
      dispatch(isLogged(true));
    })
  ]
});

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
    withPostFailure(() => {
      throw new SubmissionError({ _error: 'Nombre de usuario y contraseña no coinciden' });
    })
  ]
});

/* const validateSession = () => ({
  type: actions.VALIDATE_SESSION,
  target: 'user',
  payload: { loading: true }
}); */

export default { login: loginAction, logged };
