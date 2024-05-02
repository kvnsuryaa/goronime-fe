import axios from 'axios'

export const getListGenreAPI = () => {
    return axios.get(`/genre`)
}

export const createGenreAPI = (payload: any) => {
    return axios.post(`/genre`, payload)
}

export const updateGenreAPI = (id: string, payload: any) => {
    return axios.patch(`/genre/${id}`, payload)
}

export const deleteGenreAPI = (id: string) => {
    return axios.delete(`/genre/${id}`)
}