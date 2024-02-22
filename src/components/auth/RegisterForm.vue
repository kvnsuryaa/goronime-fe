<template>
  <div>
    <div class="d-flex mb-3">
      <h4 class="m-auto">Sign Up</h4>
    </div>
    <div>
      <el-form :model="payload" label-position="top">
        <el-form-item label="Email">
          <el-input v-model="payload.identity" placeholder="foo@gmail.com" />
        </el-form-item>
        <el-form-item label="Username">
          <el-input v-model="payload.identity" placeholder="foo428" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input
            type="password"
            show-password
            v-model="payload.password"
            placeholder="Password"
          />
        </el-form-item>
        <el-form-item label="Confirm Password">
          <el-input
            type="password"
            show-password
            v-model="confirm"
            placeholder="Re-type your password"
          />
        </el-form-item>
      </el-form>
      <div class="mt-4 d-flex">
        <el-button type="default" @click="$router.push('/auth/signin')">Sign in</el-button>
        <el-button type="primary" class="ms-auto">Sign up</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const confirm = ref('')
const payload = reactive({
  email: '',
  username: '',
  password: ''
})
</script>
