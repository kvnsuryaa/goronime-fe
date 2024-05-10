<template>
  <el-card shadow="always" class="mb-2">
    <div class="row">
      <div class="col-12"></div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { useAnimeStore } from '@/stores/anime'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute.value

const animeStore = useAnimeStore()
const detailAnime = computed(() => animeStore.detail)

onMounted(async () => {
  await init()
})

async function init() {
  const { slug } = currentRoute.params
  await animeStore.getDetailAnime(slug as string)
}

async function deleteAnime(id: string) {}
</script>
