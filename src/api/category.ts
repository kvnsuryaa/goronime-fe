import axios from 'axios'

export const getListCategoryAPI = () => {
    return axios.get(`/category`)
}

export const createCategoryAPI = (payload: any) => {
    return axios.post(`/category`, payload)
}

export const updateCategoryAPI = (id: string, payload: any) => {
    return axios.patch(`/category/${id}`, payload)
}

export const deleteCategoryAPI = (id: string) => {
    return axios.delete(`/category/${id}`)
}