<template>
  <div v-if="loadingPage">
    <div class="d-flex w-100 h-100">
      <div class="spinner-border mt-auto mb-auto ms-auto me-auto" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <div class="row" v-else>
    <div v-if="!listSchedule || listSchedule.length <= 0">
      <el-empty description="No anime on this schedule" />
    </div>
    <div class="col-12" v-else>
      <div
        class="anime-poster"
        v-for="(item, i) in listSchedule"
        :key="i"
        @click="$router.push(`/anime/${item.anime.slug}`)"
      >
        <img :src="item.anime.poster || '/broken_image2.webp'" alt="anime_poster" />
        <p class="poster-type">{{ item.anime.category.name }}</p>
        <p class="poster-title">{{ item.anime.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScheduleStore } from '@/stores/schedule'
import { computed } from 'vue'

const props = defineProps(['type'])
const scheduleStore = useScheduleStore()
const listSchedule: any = computed(() => scheduleStore.list)
const loadingPage = computed(() => scheduleStore.loadingPage)

async function init() {
  await scheduleStore.getListSchedule(props.type)
}
</script>

<style>
.v-select-img {
  height: auto;
  max-width: 2.5rem;
  margin-right: 1rem;
}

.d-center {
  display: flex;
  align-items: center;
}

.selected .v-select-img {
  width: auto;
  max-height: 23px;
  margin-right: 0.5rem;
}

.v-select .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1);
}

.v-select .dropdown li:last-child {
  border-bottom: none;
}

.v-select .dropdown li a {
  padding: 10px 20px;
  width: 100%;
  font-size: 1.25em;
  color: #3c3c3c;
}

.v-select .dropdown-menu .active > a {
  color: #fff;
}
</style>
