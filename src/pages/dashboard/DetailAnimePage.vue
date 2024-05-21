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
          <el-tabs v-model="activeTabs" type="card" class="demo-tabs" @tab-click="changeTab">
            <el-tab-pane label="Details" name="detail">
              <template #label>
                <div>
                  <i class="bi bi-info-circle me-2"></i>
                  <span>Details</span>
                </div>
              </template>
              <InfoAnime :detail="detailAnime" />
            </el-tab-pane>
            <el-tab-pane label="Episodes" name="episodes">
              <template #label>
                <div>
                  <i class="bi bi-camera-reels me-2"></i>
                  <span>Episodes</span>
                </div>
              </template>
              <ListEpisode />
            </el-tab-pane>
            <el-tab-pane label="Statistic" name="statistic">
              <template #label>
                <div>
                  <i class="bi bi-bar-chart me-2"></i>
                  <span>Statistic</span>
                </div>
              </template>
              <el-empty description="No Statistic"> </el-empty>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import InfoAnime from '../../components/views/infoAnime.vue'
import ListEpisode from '../../components/views/listEpisode.vue'
import { useAnimeStore } from '@/stores/anime'
import { useEpisodeStore } from '@/stores/episode'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { TabsPaneContext } from 'element-plus'

const router = useRouter()
const currentRoute = router.currentRoute.value

const episodeStore = useEpisodeStore()
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

async function changeTab(tb: TabsPaneContext) {
  const tabName = tb?.paneName as string
  if (tabName === 'episodes') {
    episodeStore.loadingPage = true
    await episodeStore.getListEpisode(detailAnime.value.slug)
    episodeStore.loadingPage = false
  }
}
</script>
