import axios from 'axios'

export const getListRecentAnimeAPI = (params: string = '') => {
    return axios.get(`/anime/recents?${params}`)
}