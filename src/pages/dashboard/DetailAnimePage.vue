<template>
  <div v-if="detailAnime">
    <el-card class="mb-2" padding="0">
      <div class="d-flex">
        <div class="mt-auto mb-auto">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/dashboard/anime' }">Anime</el-breadcrumb-item>
            <el-breadcrumb-item>Detail</el-breadcrumb-item>
            <el-breadcrumb-item>{{ detailAnime.title }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-button
          type="warning"
          class="ms-auto"
          @click.prevent="router.push(`/dashboard/anime/update/${detailAnime.slug}`)"
        >
          <i class="bi bi-pencil-square me-2"></i>
          <span>Update</span>
        </el-button>
      </div>
    </el-card>
    <el-card shadow="always" class="mb-2">
      <div class="row">
        <div class="col-3">
          <img :src="detailAnime.poster" alt="" width="100%" height="380px" />
        </div>
        <div class="col-9">
          <h2>{{ detailAnime.title }}</h2>
          <h6 class="text-secondary">{{ detailAnime.alternateTitle }}</h6>
          <el-tabs v-model="activeTabs" type="card" class="demo-tabs">
            <el-tab-pane label="Details" name="detail">
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <td width="200px">Alternative Title</td>
                    <td>{{ detailAnime.alternateTitle || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Status Anime</td>
                    <td>{{ detailAnime.statusAnime || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Slug</td>
                    <td>{{ detailAnime.slug || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Studio</td>
                    <td>{{ detailAnime.studio.name || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>{{ detailAnime.category.name || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Release Date</td>
                    <td>{{ detailAnime.releaseDate || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Total Episode</td>
                    <td>{{ detailAnime.totalEpisode || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Synopsis</td>
                    <td>{{ detailAnime.synopsis || '-' }}</td>
                  </tr>
                  <tr>
                    <td>Genre</td>
                    <td>
                      <a
                        href=""
                        class="btn btn-sm me-1 btn-outline-secondary"
                        v-for="(item, i) in detailAnime.animeGenre"
                        :key="`genre-${i}`"
                      >
                        {{ item.genre.name }}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </el-tab-pane>
            <el-tab-pane label="Statistic" name="statisti">Config</el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { useAnimeStore } from '@/stores/anime'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentRoute = router.currentRoute.value

const animeStore = useAnimeStore()
const activeTabs = ref('detail')
const detailAnime: any = computed(() => animeStore.detail)

onMounted(async () => {
  await init()
})

async function init() {
  const { slug } = currentRoute.params
  await animeStore.getDetailAnime(slug as string)
}

async function deleteAnime(id: string) {}
</script>
