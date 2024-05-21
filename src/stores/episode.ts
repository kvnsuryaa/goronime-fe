import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { createEpisodeAPI, deleteEpisodeAPI, getListEpisodeAPI, getOneEpisodeAPI } from '@/api/episode'
import { uploadFileAPI } from '@/api/upload'

export const useEpisodeStore = defineStore('episode', () => {
    const list = ref([])
    const loadingPage = ref(false)
    const episode = ref({})
    const payload = reactive({
        episodeNumber: 0,
        episodeSource: ''
    })

    async function getListEpisode(slug: string) {
        try {
            const { data: res } = await getListEpisodeAPI(slug)
            list.value = res.data
        } catch (err) {
            console.log('Error while get list episode', err)
        }
    }

    async function createEpisode(animeId: string) {
        try {
            const { data: res } = await createEpisodeAPI(animeId, payload)
            console.log(res)
            payload.episodeNumber = 0
            payload.episodeSource = ''
        } catch (err) {
            console.log('Error while create episode', err)
        }
    }

    async function deleteEpisode(animeId: string, id: string) {
        try {
            const { data: res } = await deleteEpisodeAPI(animeId, id)
            console.log(res)
        } catch (err) {
            console.log('Error while delete episode', err)
        }
    }

    async function getDetailEpisode(animeId: string, episodeNumber: number) {
        try {
            const { data: res } = await getOneEpisodeAPI(animeId, episodeNumber)
            episode.value = res.data
        } catch (err) {
            console.log('Error while delete episode', err)
        }
    }

    async function uploadEpisode(data: any, uploadProgress: Function) {
        try {
            const { data: res } = await uploadFileAPI(data, uploadProgress)
            return res
        } catch (err) {
            console.log('Error while upload episode', err)
        }
    }

    return {
        list,
        payload,
        loadingPage,
        episode,

        getListEpisode,
        getDetailEpisode,
        createEpisode,
        deleteEpisode,
        uploadEpisode
    }
})
