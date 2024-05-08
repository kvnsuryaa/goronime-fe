import axios from 'axios'

export const uploadFileAPI = (payload: FormData) => {
    return axios.post(`/upload/file`, payload, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}