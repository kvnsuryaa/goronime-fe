import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getListRecentAnimeAPI } from '@/api/anime'

export const useAnimeStore = defineStore('anime', {
    state: () => ({
        anime: [],
        pagination: {}
    }),
    actions: {
        async getRecentAnime() {
            const { data: res } = await getListRecentAnimeAPI()
            this.anime = res.data
        }
    },
})
