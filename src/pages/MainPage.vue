<template>
  <div class="container-md container-fluid mt-4">
    <div class="row">
      <div class="col-12 col-md-8">
        <h3 class="text-white fw-bold heading-title mb-4">Recent Release</h3>
        <div class="d-flex flex-wrap" style="gap: 10px">
          <div
            class="anime-poster"
            v-for="(item, i) in listRecent"
            :key="i"
            @click="$router.push(`/anime/${item.slug}`)"
          >
            <img :src="item.poster || '/broken_image2.webp'" alt="anime_poster" />
            <p class="poster-episode">{{ item.latestEpisodeNumber }}</p>
            <p class="poster-type">{{ item.categoryName }}</p>
            <p class="poster-title">{{ item.title }}</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useAnimeStore } from '../stores/anime'

// store
const animeStore = useAnimeStore()
const listRecent: any = computed(() => animeStore.recentAnime)
onMounted(async () => {
  await animeStore.getRecentAnime()
})
</script>

<style></style>
