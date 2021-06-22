import axios from 'axios'

export const client = axios.create({
    baseURL: "/"
})

export const post = (path, payload) => client.post(path, payload).then(res => res.json()).then(res => res.data)

export const get = (path) => client.get(path).then(res => res.json()).then(res => res.data)