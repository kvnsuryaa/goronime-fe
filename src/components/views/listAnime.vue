<template>
  <h2 class="text-white fw-bold heading-title mb-4">Anime List</h2>
  <el-card shadow="always" class="mb-2">
    <div class="row">
      <div class="col-12">
        <div class="d-flex mb-2">
          <el-input style="width: 240px" class="me-auto" placeholder="Search Anime" />
          <el-button type="success" class="ms-auto" @click="router.push('/dashboard/anime/create')">
            <i class="bi bi-plus-circle me-2"></i>
            Create
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
          <el-table-column label="Action">
            <template #default="scope">
              <el-button @click="router.push(`/dashboard/anime/detail/${scope.row.slug}`)">
                View
              </el-button>
              <el-button type="danger" @click="deleteAnime(scope.row.id)"> Delete </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { useAnimeStore } from '@/stores/anime'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const animeStore = useAnimeStore()
const listAnime = computed(() => animeStore.anime)

onMounted(async () => {
  await init()
})

async function init() {
  await animeStore.getListAnime()
}

async function deleteAnime(id: string) {}
</script>
