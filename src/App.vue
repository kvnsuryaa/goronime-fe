<template>
  <RouterView />
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const payload = reactive({
  identity: '',
  password: ''
})
</script>
