<template>
  <div>
    <div class="d-flex mb-3">
      <h4 class="m-auto">Sign In</h4>
    </div>
    <div>
      <el-form :model="payload" label-position="top">
        <el-form-item label="Email or username">
          <el-input v-model="payload.identity" placeholder="foo@gmail.com" />
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
        <el-button type="default" @click="$router.push('/auth/signup')"> Sign up </el-button>
        <el-button type="primary" class="ms-auto">Sign in</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const router = useRouter()
const payload = reactive({
  identity: '',
  password: ''
})

onMounted(() => {
  console.log(router)
})
</script>
