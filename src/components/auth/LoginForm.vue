<template>
  <div>
    <div class="d-flex mb-3">
      <h4 class="m-auto">Sign In</h4>
    </div>
    <div>
      <el-form :model="payload" label-position="top">
        <el-form-item label="Email or username">
          <el-input v-model="payload.email" placeholder="foo@gmail.com" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input
            type="password"
            show-password
            v-model="payload.password"
            placeholder="Password"
          />
        </el-form-item>
      </el-form>
      <div class="mt-4 d-flex">
        <el-button type="default" @click="$router.push('/auth/signup')" :disabled="submitLoading">
          Sign up
        </el-button>
        <el-button type="primary" class="ms-auto" @click.prevent="login" :disabled="submitLoading">
          <div class="spinner-border spinner-border-sm me-2" role="status" v-if="submitLoading">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span>Sign in</span>
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const submitLoading = ref(false)
const router = useRouter()
const authStore = useAuthStore()
const payload = reactive({
  email: '',
  password: ''
})

onMounted(() => {})

async function login() {
  try {
    submitLoading.value = true
    await authStore.login(payload)
    router.push('/dashboard')
  } catch (err) {
    console.log(err)
  } finally {
    submitLoading.value = false
  }
}
</script>
