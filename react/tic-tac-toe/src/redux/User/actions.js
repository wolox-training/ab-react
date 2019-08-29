import { SubmissionError } from 'redux-form';

import AuthService from '../../services/AuthService';
import LocalStoreService from '../../services/LocalStoreService';

export const actions = {
  SUCCESS_LOGIN: '@@USER/SUCCESS_LOGIN',
  FAILURE_LOGIN: '@@USER/FAILURE_LOGIN',
  IS_LOGGED: '@@USER/IS_LOGGED',
  VALIDATE_SESSION: '@@USER/VALIDATE_SESSION'
};

const loginSuccess = () => ({
  type: actions.SUCCESS_LOGIN,
  payload: { isLogged: true }
});

const validateSession = () => ({
  type: actions.VALIDATE_SESSION,
  payload: { loading: true }
});

const loginFailure = () => ({
  type: actions.FAILURE_LOGIN,
  payload: { isLogged: false }
});

const isLogged = value => ({
  type: actions.IS_LOGGED,
  payload: { isLogged: value, loading: false }
});

const login = values => async dispatch => {
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
};

const logged = () => async dispatch => {
  dispatch(validateSession());
  const token = await LocalStoreService.getValue('token');
  AuthService.setToken(token);
  dispatch(isLogged(!!token));
};

export default { login, logged };
