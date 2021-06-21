import axios from 'axios'

const token = localStorage.getItem("token-descarte-certo") || ''


export const client = axios.create({
    baseURL: "/",
    headers: {
        Authorization: token ? `bearer ${token}` : ''
    }
})

export const post = (path, payload) => client.post(path, payload).then(res => res.json()).then(res => res.data)

export const get = (path) => client.get(path).then(res => res.json()).then(res => res.data)