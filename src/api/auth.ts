import axios from 'axios'

export const loginAPI = (body: any) => {
    return axios.post(`/auth/login`, body)
}

export const registerAPI = (body: any) => {
    return axios.post(`/auth/register`, body)
}