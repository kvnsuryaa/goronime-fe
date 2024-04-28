import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getDetailAnimeSlugAPI, getEpisodeDetailAPI, getListAnimeAPI, getListRecentAnimeAPI } from '@/api/anime'

export const useAnimeStore = defineStore('anime', () => {
    const anime = ref([])
    const pagination = ref({})
    const recentAnime = ref([])
    const detail = ref(null)
    const episodeDetail = ref(null)

    async function getListAnime() {
        const { data: res } = await getListAnimeAPI()
        anime.value = res.data.list
        pagination.value = res.data.pagination
    }

    async function getRecentAnime() {
        const { data: res } = await getListRecentAnimeAPI()
        recentAnime.value = res.data
    }

    async function getDetailAnime(slug: string) {
        const { data: res } = await getDetailAnimeSlugAPI(slug)
        detail.value = res.data
    }

    async function getEpisodeAnime(slug: string, epsd_number: string) {
        const { data: res } = await getEpisodeDetailAPI(slug, epsd_number)
        episodeDetail.value = res.data
    }

    return {
        anime,
        pagination,
        recentAnime,
        detail,
        episodeDetail,
        getListAnime,
        getRecentAnime,
        getDetailAnime,
        getEpisodeAnime
    }
})
