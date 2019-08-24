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
  type: actions.SUCCESS_LOGIN
});

const loginFailure = () => ({
  type: actions.FAILURE_LOGIN
});


const login = (values) => async (dispatch) => {
  dispatch(loginRequest());
  const { ok, data: { token } } = await AuthService.login(values);
  if (ok) {
    const localStore = new LocalStoreService();
    localStore.setValue('token', token);
    dispatch(loginSuccess());
  } else {
    dispatch(loginFailure());
  }
};

export default { login };
