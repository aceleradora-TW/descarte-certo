import axios from "axios";

const client = axios.create({
  baseURL: "/",
  headers: {
    common: {
      'Authorization': localStorage.getItem("token-descarte-certo") || ''
    }
  }
});

export const setTokenInHeaders = (token) => {
  token = (token !== undefined || token !== null) ? token : ''
  client.defaults.headers.common = {
    ...client.defaults.headers.common,
    'Authorization': localStorage.getItem("token-descarte-certo") || token
  }
}

export const post = (path, payload) => client.post(path, payload).then((res) => res.data);

export const get = (path) => client.get(path).then((res) => res.data);

export const put = (path) => client.put(path).then((res) => res.data);
