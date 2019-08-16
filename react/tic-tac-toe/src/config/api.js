import { create } from 'apisauce';

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 50000
});

export default api;
