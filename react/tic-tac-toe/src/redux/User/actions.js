import AuthService from '../../services/AuthService';
import LocalStoreService from '../../services/LocalStoreService';

export const actions = {
  POST_LOGIN: '@@USER/POST_LOGIN',
  SUCCESS_LOGIN: '@@USER/SUCCESS_LOGIN',
  FAILURE_LOGIN: '@@USER/FAILURE_LOGIN'
};

const loginRequest = () => ({
  type: actions.POST_LOGIN
});

const loginSuccess = () => ({
  type: actions.SUCCESS_LOGIN,
  payload: true
});

const loginFailure = () => ({
  type: actions.FAILURE_LOGIN,
  payload: false
});


const login = (values) => async (dispatch) => {
  dispatch(loginRequest());
  const { ok, data: { token } } = await AuthService.login(values);
  if (ok) {
    const localStore = new LocalStoreService();
    localStore.setValue('token', token);
    dispatch(loginSuccess());
  } else {
    // eslint-disable-next-line no-alert
    window.alert('Nombre de usuario y contraseña no coinciden');
    dispatch(loginFailure());
  }
};

export default { login };
