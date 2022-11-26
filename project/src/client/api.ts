import axios, {AxiosInstance} from 'axios';

const URL_API = 'https://10.react.pages.academy/wtw';
const REQUEST_TIMEOUT = 5000;

export function createAPI(): AxiosInstance {
  return axios.create({
    baseURL: URL_API,
    timeout: REQUEST_TIMEOUT,
  });
}
