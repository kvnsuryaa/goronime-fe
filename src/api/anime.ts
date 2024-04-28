import axios from 'axios'

export const getListAnimeAPI = (params: string = '') => {
    return axios.get(`/anime`)
}

export const getListRecentAnimeAPI = (params: string = '') => {
    return axios.get(`/anime/recents?${params}`)
}

export const getDetailAnimeSlugAPI = (slug: string) => {
    return axios.get(`/anime/detail/${slug}`)
}

export const getEpisodeDetailAPI = (slug: string, episode: string) => {
    return axios.get(`/anime/${slug}/episode/${episode}`)
}