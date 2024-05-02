import axios from 'axios'

export const getListCategoryAPI = () => {
    return axios.get(`/category`)
}

export const createCategoryAPI = () => {
    return axios.post(`/category`)
}

export const updateCategoryAPI = (id: string) => {
    return axios.patch(`/category/${id}`)
}

export const deleteCategoryAPI = (id: string) => {
    return axios.delete(`/category/${id}`)
}