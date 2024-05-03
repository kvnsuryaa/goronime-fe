import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import axios from 'axios'
import { createStudioAPI, deleteStudioAPI, getListStudioAPI, updateStudioAPI } from '@/api/studio'

export const useStudioStore = defineStore('studio', () => {
    const list = ref([])
    const payload = reactive({
        name: ''
    })

    async function getListStudio() {
        try {
            const { data: res } = await getListStudioAPI()
            list.value = res.data
        } catch (err) {
            console.log('Error while get list studio', err)
        }
    }

    async function createStudio() {
        try {
            const { data: res } = await createStudioAPI(payload)
            console.log(res)
            payload.name = ''
        } catch (err) {
            console.log('Error while create studio', err)
        }
    }

    async function updateStudio(id: string) {
        try {
            const { data: res } = await updateStudioAPI(id, payload)
            console.log(res)
        } catch (err) {
            console.log('Error while update studio', err)
        }
    }

    async function deleteStudio(id: string) {
        try {
            const { data: res } = await deleteStudioAPI(id)
            console.log(res)
        } catch (err) {
            console.log('Error while delete studio', err)
        }
    }

    return {
        list,
        payload,

        getListStudio,
        createStudio,
        updateStudio,
        deleteStudio
    }
})
