import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { loginAPI, registerAPI } from '@/api/auth'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null)
    const token = ref(null)

    async function login(payload: any) {
        const { data: res } = await loginAPI(payload)
        const data = res.data
        user.value = data

        const { token: login_token } = data
        token.value = login_token
        axios.defaults.headers.common["Authorization"] = `Bearer ${token.value}`
    }
    async function register(payload: any) {
        const { data: res } = await registerAPI(payload)
        console.log(res)
    }

    async function logout() {
        console.log('logouting user...')
        user.value = null
        token.value = null
        axios.defaults.headers.common["Authorization"] = ''
    }

    return {
        user,
        token,
        login,
        register,
        logout
    }
}, {
    persist: true
})
