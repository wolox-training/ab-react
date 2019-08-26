import api from '../config/api';
import { headers } from '../constants/constants';

export default {
  login: data => api.post('/login', data, headers),
  setToken: token => api.setHeaders({
    Authorization: token
  })
};
