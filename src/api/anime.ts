import axios from 'axios'

export const getListAnimeAPI = (params: string = '') => {
    return axios.get(`/anime?${params}`)
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

export const createAnimeAPI = (payload: any) => {
    return axios.post(`/anime`, payload)
}

export const updateAnimeAPI = (id: string, payload: any) => {
    return axios.patch(`/anime/update/${id}`, payload)
}

export const deleteAnimeAPI = (id: string) => {
    return axios.delete(`/anime/delete/${id}`)
}