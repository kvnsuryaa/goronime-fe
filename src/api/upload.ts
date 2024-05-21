import axios from 'axios'

export const uploadFileAPI = (payload: FormData, callback?: Function) => {
    return axios.post(`/upload/file`, payload, {
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        onDownloadProgress: (progress: any) => {
            const data = Math.round((progress.loaded * 100) / progress.total)
            console.log(data)
            if (callback) {
                callback(progress)
            }
        },
        onUploadProgress: (progress: any) => {
            const data = Math.round((progress.loaded * 100) / progress.total)
            console.log(data)
            if (callback) {
                callback(progress)
            }
        }
    })
}