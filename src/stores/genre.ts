import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import axios from 'axios'
import { createGenreAPI, deleteGenreAPI, getListGenreAPI, updateGenreAPI } from '@/api/genre'

export const useGenreStore = defineStore('genre', () => {
    const list = ref([])
    const payload = reactive({
        name: ''
    })

    async function getListGenre() {
        try {
            const { data: res } = await getListGenreAPI()
            list.value = res.data
        } catch (err) {
            console.log('Error while get list genre', err)
        }
    }

    async function createGenre() {
        try {
            const { data: res } = await createGenreAPI(payload)
            console.log(res)
            payload.name = ''
        } catch (err) {
            console.log('Error while create genre', err)
        }
    }

    async function updateGenre(id: string, payload: any) {
        try {
            const { data: res } = await updateGenreAPI(id, payload)
            console.log(res)
        } catch (err) {
            console.log('Error while update genre', err)
        }
    }

    async function deleteGenre(id: string) {
        try {
            const { data: res } = await deleteGenreAPI(id)
            console.log(res)
        } catch (err) {
            console.log('Error while delete genre', err)
        }
    }

    return {
        list,
        payload,

        getListGenre,
        createGenre,
        updateGenre,
        deleteGenre
    }
})
