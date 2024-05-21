import axios from 'axios'

export const getListEpisodeAPI = (slug: any) => {
    return axios.get(`/anime/${slug}/episode`)
}

export const getOneEpisodeAPI = (slug: any, episode: number) => {
    return axios.get(`/anime/${slug}/episode/${episode}`)
}

export const createEpisodeAPI = (animeId: string, body: any) => {
    return axios.post(`/anime/${animeId}/episode`, body)
}

export const deleteEpisodeAPI = (animeId: any, id: string) => {
    return axios.get(`/anime/${animeId}/episode/${id}`)
}