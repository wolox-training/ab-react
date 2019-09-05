import { create } from 'apisauce';

const headers = { headers: { Accept: 'application/json', 'Content-Type': 'application/json' } };

const api = create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 50000,
  headers
});

export default api;
