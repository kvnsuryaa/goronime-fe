<template>
  <el-card shadow="always" class="mb-2" v-if="detailAnime">
    <div class="row">
      <div class="col-3">
        <img :src="detailAnime.poster" alt="" width="100%" height="380px" />
      </div>
      <div class="col-9">
        <h2>{{ detailAnime.title }}</h2>
        <h5>{{ detailAnime.alternateTitle }}</h5>
        <el-tabs v-model="activeTabs" type="card" class="demo-tabs">
          <el-tab-pane label="Details" name="detail">
            <div class="mb-2">{{ detailAnime.synopsis }}</div>
            <div>
              <a
                href=""
                class="btn btn-sm me-1 btn-outline-secondary"
                v-for="(item, i) in detailAnime.animeGenre"
                :key="`genre-${i}`"
              >
                {{ item.genre.name }}
              </a>
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
          </el-tab-pane>
          <el-tab-pane label="Statistic" name="statisti">Config</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </el-card>
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
