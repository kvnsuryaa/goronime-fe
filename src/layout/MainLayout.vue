<template>
  <div>
    <MainHeader />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
</script>

<style></style>
