import axios, {AxiosInstance} from 'axios';
import {getToken} from '../services/user-data';

const URL_API = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export function createAPI(): AxiosInstance {

  const instance = axios.create({
    baseURL: URL_API,
    timeout: REQUEST_TIMEOUT,
  });

  instance.interceptors.request.use((config) => {
    config.headers['X-Token'] = getToken();
    return config;
  });

  instance.interceptors.response.use((response) => response);

  return instance;
}
