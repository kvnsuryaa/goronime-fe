<template>
  <div class="container-md container-fluid mt-4">
    <div class="row">
      <div class="col-12">
        <h2 class="text-white fw-bold heading-title mb-3">Anime List</h2>
        <!-- <h6 class="text-white mb-4"><span class="fw-bold">You Searched for:</span> one punch</h6> -->
        <hr />
        <div class="d-flex flex-wrap" style="gap: 10px">
          <div
            class="anime-poster"
            v-for="(item, i) in animeStore.anime"
            :key="i"
            @click="$router.push(`/anime/${item.slug}`)"
          >
            <img :src="item.poster || '/broken_image2.webp'" alt="anime_poster" />
            <p class="poster-type">{{ item.category.name }}</p>
            <p class="poster-title">{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useAnimeStore } from '../stores/anime'

// store
const animeStore = useAnimeStore()

onMounted(async () => {
  await animeStore.getListAnime()
})
</script>

<style></style>
