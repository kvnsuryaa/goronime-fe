<template>
  <div class="container-md container-fluid mt-4">
    <div class="row">
      <div class="col-12">
        <h2 class="fw-bold heading-title mb-3">Anime List</h2>
        <hr />
        <div v-for="(item, i) in animeAlphabeth" :key="i" class="box-list-anime">
          <h4 class="border-bottom pb-2">{{ item.name }}</h4>
          <ul>
            <li v-for="(anime, o) in item.anime" :key="`anime-${o}`">
              <RouterLink :to="`/anime/${anime[1]}`">
                {{ anime[0] }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useAnimeStore } from '../stores/anime'

// store
const animeStore: any = useAnimeStore()
const animeAlphabeth = computed(() => animeStore.animeAlphabeth)
onMounted(async () => {
  await animeStore.getListAnimeAlphabeth()
})
</script>

<style></style>
