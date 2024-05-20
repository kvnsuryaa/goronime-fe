<template>
  <div v-if="loadingPage">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div class="row" v-else>
    <div class="col-12">
      <div class="d-flex mb-2">
        <div class="me-auto mt-auto mb-auto h3">
          Schedule on <span class="text-primary">{{ type }}</span>
        </div>
        <el-button type="warning" class="ms-auto" @click="router.push('/dashboard/anime/create')">
          <i class="bi bi-pencil-square me-2"></i>
          Change
        </el-button>
      </div>
      <el-table :data="listAnime" border style="width: 100%">
        <el-table-column prop="poster" label="Poster" width="150px">
          <template #default="scope">
            <div class="text-center">
              <img :src="scope.row.poster" alt="poster" width="100px" height="130px" />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="Title" />
        <el-table-column prop="statusAnime" label="Status" />
        <el-table-column prop="category" label="Category">
          <template #default="scope">
            <div>{{ scope.row.category.name }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnimeStore } from '@/stores/anime'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

defineProps({
  type: String
})

const router = useRouter()
const animeStore = useAnimeStore()
const listAnime = computed(() => animeStore.anime)
const loadingPage = ref(false)

onMounted(async () => {
  loadingPage.value = true
  await init()
  loadingPage.value = false
})

async function init() {
  await animeStore.getListAnime()
}
</script>
