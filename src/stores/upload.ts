import { defineStore } from 'pinia'
import { uploadFileAPI } from '@/api/upload'

export const useUploadStore = defineStore('upload', () => {
    async function uploadFile(payload: FormData) {
        try {
            const { data: res } = await uploadFileAPI(payload)
            return res
        } catch (err) {
            console.log('Error while get list category', err)
            return null
        }
    }

    return {
        uploadFile
    }
})
