<template>
  <div class="d-flex">
    <!-- <img src="/public/wave-auth-top.svg" class="auth-wave wave-top" alt="" /> -->
    <img src="/public/wave-auth-bottom.svg" class="auth-wave wave-bottom" alt="" />
    <div class="d-flex flex-column m-auto" style="height: 100vh">
      <div class="card m-auto shadow-lg" style="width: 30rem">
        <div class="card-body">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const payload = reactive({
  identity: '',
  password: ''
})
</script>

<style scoped>
.auth-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
}

.auth-wave {
  position: absolute;
}

.wave-bottom {
  bottom: 0;
}

.wave-top {
  top: 0;
}
</style>
