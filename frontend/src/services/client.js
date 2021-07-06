import axios from "axios";

export const client = axios.create({
  baseURL: "/",
});

client.defaults.headers.common["Authorization"] = localStorage.getItem(
  "token-descarte-certo"
);
console.log(client.defaults.headers.common["Authorization"])

export const post = (path, payload) => client.post(path, payload).then((res) => res.data);


export const get = (path) => client.get(path).then((res) => res.data);

