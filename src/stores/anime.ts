import { reactive, ref } from 'vue'
import { defineStore } from 'pinia'
import { createAnimeAPI, deleteAnimeAPI, getDetailAnimeSlugAPI, getEpisodeDetailAPI, getListAnimeAPI, getListRecentAnimeAPI, updateAnimeAPI } from '@/api/anime'
import { fi } from 'element-plus/es/locales.mjs'

export const useAnimeStore = defineStore('anime', () => {
    const anime = ref([])
    const animeAlphabeth: any = ref([
        {
            name: '#',
            anime: []
        },
        {
            name: 'A',
            anime: []
        },
        {
            name: 'B',
            anime: []
        },
        {
            name: 'C',
            anime: []
        },
        {
            name: 'D',
            anime: []
        },
        {
            name: 'E',
            anime: []
        },
        {
            name: 'F',
            anime: []
        },
        {
            name: 'G',
            anime: []
        },
        {
            name: 'H',
            anime: []
        },
        {
            name: 'I',
            anime: []
        },
        {
            name: 'J',
            anime: []
        },
        {
            name: 'K',
            anime: []
        },
        {
            name: 'L',
            anime: []
        },
        {
            name: 'M',
            anime: []
        },
        {
            name: 'N',
            anime: []
        },
        {
            name: 'O',
            anime: []
        },
        {
            name: 'P',
            anime: []
        },
        {
            name: 'Q',
            anime: []
        },
        {
            name: 'R',
            anime: []
        },
        {
            name: 'S',
            anime: []
        },
        {
            name: 'T',
            anime: []
        },
        {
            name: 'U',
            anime: []
        },
        {
            name: 'V',
            anime: []
        },
        {
            name: 'W',
            anime: []
        },
        {
            name: 'X',
            anime: []
        },
        {
            name: 'Y',
            anime: []
        },
        {
            name: 'Z',
            anime: []
        }
    ])
    const pagination = ref({})
    const recentAnime = ref([])
    const finishedAnime = ref([])
    const detail = ref(null)
    const episodeDetail = ref(null)
    const statusAnime = ref(['ONGOING', 'FINISHED', 'COMINGSOON'])
    const payload = reactive({
        title: '',
        slug: '',
        alternateTitle: '',
        synopsis: '',
        poster: '',
        releaseDate: '',
        totalEpisode: 0,
        statusAnime: '',
        categoryId: null,
        studioId: null,
        genres: [] as any
    })

    function resetPayload() {
        Object.assign(payload, {
            title: '',
            slug: '',
            alternateTitle: '',
            synopsis: '',
            poster: '',
            releaseDate: '',
            totalEpisode: 0,
            statusAnime: '',
            categoryId: null,
            studioId: null,
            genres: [] as any
        });
    }

    function resetAnimeAlphabeth() {
        let i = 0
        while (i < animeAlphabeth.value.length) {
            animeAlphabeth.value[i].anime = []
            i++
        }
    }

    async function getListAnimeAlphabeth() {
        resetAnimeAlphabeth()
        const params = new URLSearchParams({ res: 'text' }).toString()
        const { data: res } = await getListAnimeAPI(params)
        let i = 0
        const allText = res.data[0].all.split('(|)')
        while (i < allText.length) {
            const text = allText[i].split('(@)') as Array<string>
            const title = text[0]
            const checkAlphabethIndex = animeAlphabeth.value.findIndex((item: any) => item.name === title[0].toUpperCase())
            if (checkAlphabethIndex < 0) animeAlphabeth.value[0].anime.push(text)
            else animeAlphabeth.value[checkAlphabethIndex].anime.push(text)
            i++
        }
    }
    async function getListAnime(params?: any) {
        if (params) params = new URLSearchParams(params).toString()
        else params = ''
        const { data: res } = await getListAnimeAPI(params)
        anime.value = res.data.list
        pagination.value = res.data.pagination
    }

    async function getRecentAnime(status?: string) {
        const params = { status: 'ONGOING' }
        if (status) params.status = status
        const queries = new URLSearchParams(params).toString()

        const { data: res } = await getListRecentAnimeAPI(queries)
        if (params.status === 'ONGOING') recentAnime.value = res.data
        else if (params.status === 'FINISHED') finishedAnime.value = res.data
    }

    async function getDetailAnime(slug: string) {
        const { data: res } = await getDetailAnimeSlugAPI(slug)
        detail.value = res.data
    }

    async function getEpisodeAnime(slug: string, epsd_number: string) {
        const { data: res } = await getEpisodeDetailAPI(slug, epsd_number)
        episodeDetail.value = res.data
    }

    async function createAnime(payload: any) {
        try {
            const { data: res } = await createAnimeAPI(payload)
            console.log(res)
            return true
        } catch (err) {
            return false
        }
    }

    async function updateAnime(id: string, payload: any) {
        try {
            const { data: res } = await updateAnimeAPI(id, payload)
            console.log(res)
            return true
        } catch (err) {
            return false
        }
    }

    async function deleteAnime(id: string) {
        try {
            const { data: res } = await deleteAnimeAPI(id)
            console.log(res)
            return true
        } catch (err) {
            return false
        }
    }

    return {
        anime,
        animeAlphabeth,
        pagination,
        recentAnime,
        detail,
        episodeDetail,
        statusAnime,
        finishedAnime,
        payload,

        getListAnime,
        getListAnimeAlphabeth,
        getRecentAnime,
        getDetailAnime,
        getEpisodeAnime,
        createAnime,
        updateAnime,
        deleteAnime
    }
})
