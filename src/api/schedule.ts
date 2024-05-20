import axios from 'axios'

export const getListScheduleAPI = (type: string) => {
    return axios.get(`/schedule/${type}`)
}

export const createScheduleAPI = (body: any) => {
    return axios.post(`/schedule`, body)
}

export const deleteScheduleAPI = (id: string) => {
    return axios.delete(`/schedule/${id}`)
}