import axios from 'axios'

export const getListStudioAPI = () => {
    return axios.get(`/studio`)
}

export const createStudioAPI = () => {
    return axios.post(`/studio`)
}

export const updateStudioAPI = (id: string) => {
    return axios.patch(`/studio/${id}`)
}

export const deleteStudioAPI = (id: string) => {
    return axios.delete(`/studio/${id}`)
}