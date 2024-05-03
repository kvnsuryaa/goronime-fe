import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

import axios from 'axios'
import { createCategoryAPI, deleteCategoryAPI, getListCategoryAPI, updateCategoryAPI } from '@/api/category'

export const useCategoryStore = defineStore('category', () => {
    const list = ref([])
    const payload = reactive({
        name: ''
    })

    async function getListCategory() {
        try {
            const { data: res } = await getListCategoryAPI()
            list.value = res.data
        } catch (err) {
            console.log('Error while get list category', err)
        }
    }

    async function createCategory() {
        try {
            const { data: res } = await createCategoryAPI(payload)
            console.log(res)
            payload.name = ''
        } catch (err) {
            console.log('Error while create category', err)
        }
    }

    async function updateCategory(id: string) {
        try {
            const { data: res } = await updateCategoryAPI(id, payload)
            console.log(res)
        } catch (err) {
            console.log('Error while update category', err)
        }
    }

    async function deleteCategory(id: string) {
        try {
            const { data: res } = await deleteCategoryAPI(id)
            console.log(res)
        } catch (err) {
            console.log('Error while delete category', err)
        }
    }

    return {
        list,
        payload,

        getListCategory,
        createCategory,
        updateCategory,
        deleteCategory
    }
})
