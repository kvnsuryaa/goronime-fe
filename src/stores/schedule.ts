import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { createScheduleAPI, deleteScheduleAPI, getListScheduleAPI } from '@/api/schedule'

export const useScheduleStore = defineStore('schedule', () => {
    const list = ref([])
    const loadingPage = ref(false)
    const payload = reactive({
        scheduleType: '',
        animes: [] as Array<string>
    })

    async function getListSchedule(type: string) {
        try {
            const { data: res } = await getListScheduleAPI(type.toUpperCase())
            list.value = res.data
        } catch (err) {
            console.log('Error while get list genre', err)
        }
    }

    async function createSchedule() {
        try {
            const { data: res } = await createScheduleAPI(payload)
            console.log(res)
            payload.scheduleType = ''
            payload.animes = []
        } catch (err) {
            console.log('Error while create genre', err)
        }
    }

    async function deleteSchedule(id: string) {
        try {
            const { data: res } = await deleteScheduleAPI(id)
            console.log(res)
        } catch (err) {
            console.log('Error while delete genre', err)
        }
    }

    return {
        list,
        payload,
        loadingPage,

        getListSchedule,
        createSchedule,
        deleteSchedule
    }
})
