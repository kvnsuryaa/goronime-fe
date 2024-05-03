import axios from 'axios'

export const getListStudioAPI = () => {
    return axios.get(`/studio`)
}

export const createStudioAPI = (payload: any) => {
    return axios.post(`/studio`, payload)
}

export const updateStudioAPI = (id: string, payload: any) => {
    return axios.patch(`/studio/${id}`, payload)
}

export const deleteStudioAPI = (id: string) => {
    return axios.delete(`/studio/${id}`)
}