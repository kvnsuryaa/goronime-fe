<template>
  <div
    class="container-md container-fluid mt-4 mb-5"
    v-if="!loadingPage && detail && episodeDetail"
  >
    <div class="row">
      <div class="col-12 mb-3">
        <!-- <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/J6s16ljXax0?si=7Z9FxgLHcd-NoaR9"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> -->
        <video
          width="100%"
          height="500"
          disableremoteplayback
          webkit-playsinline
          playsinline
          controls
          class="video-anime"
          :src="episodeDetail.episodeSource"
        ></video>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-9">
        <div class="row mb-4">
          <div class="col-12">
            <div class="detail-anime">
              <div class="detail-anime-title">
                <h3 class="text-white fw-bold">
                  {{ detail.title || 'No Title' }}
                </h3>
                <span class="text-secondary"> {{ detail.alternateTitle || '' }}</span>
              </div>
              <div class="detail-anime-rating"></div>
              <div class="detail-anime-description text-secondary">
                {{ detail.synopsis }}
              </div>
              <div class="detail-anime-others text-secondary">
                <div class="row mb-3">
                  <div class="col-lg-6">
                    <table class="table-detail-anime">
                      <tr>
                        <td width="50%">Type:</td>
                        <td width="50%" class="text-light">{{ detail.category.name || '-' }}</td>
                      </tr>
                      <tr>
                        <td>Studio:</td>
                        <td class="text-light">{{ detail.studio.name }}</td>
                      </tr>
                      <tr>
                        <td>Status:</td>
                        <td class="text-light">{{ detail.statusAnime }}</td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-6">
                    <table class="table-detail-anime">
                      <tr>
                        <td width="50%">Date Aired:</td>
                        <td width="50%" class="text-light">{{ detail.releaseDate || '-' }}</td>
                      </tr>
                      <tr>
                        <td>Rating:</td>
                        <td class="text-light">
                          <i class="bi bi-star-fill me-1"></i>
                          <span>8.35</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Total Episode:</td>
                        <td class="text-light">{{ detail.totalEpisode || '-' }}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <a
                      href=""
                      class="btn btn-sm me-1 btn-outline-secondary"
                      v-for="(item, i) in detail.animeGenre"
                      :key="`genre-${i}`"
                    >
                      {{ item.genre.name }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-3">
        <h4 class="text-white fw-bold">
          <i class="bi bi-camera-reels me-2"></i>
          <span>Episode {{ current_episode }}</span>
        </h4>
        <input
          type="text"
          class="form-control form-control-sm mb-3"
          placeholder="Search Episodes"
        />
        <div class="list-episode">
          <div
            class="episode-items"
            v-for="(item, i) in detail.AnimeEpisode"
            :key="`epsd-${i}`"
            @click="watchPage(item)"
          >
            <div class="d-flex">
              <h6 class="mt-auto mb-auto me-3 ms-3">
                <i class="bi bi-play-circle text-white"></i>
              </h6>
              <div>
                <div class="text-white">Episode {{ item.episodeNumber }}</div>
                <small class="text-secondary">
                  {{ moment(item.createdAt).format('MMM DD, YYYY') }}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElLoading } from 'element-plus'
import { useAnimeStore } from '../stores/anime'
import moment from 'moment'

const router = useRouter()
const animeStore: any = useAnimeStore()
const slug = router.currentRoute.value.params.slug as string
let loadingPage = ref(false)
let current_episode = ref('')

const detail = computed(() => {
  return animeStore.detail
})

const episodeDetail = computed(() => {
  return animeStore.episodeDetail
})

onMounted(async () => {
  loadingPage.value = true
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  const episode = router.currentRoute.value.params.episode_name as string
  current_episode.value = `${episode}`

  await animeStore.getDetailAnime(slug)
  await animeStore.getEpisodeAnime(slug, episode)

  setTimeout(() => {
    loadingPage.value = false
    loading.close()
  }, 500)
})

function watchPage(item: any) {
  router.push(`/anime/${slug}/episode/${item.episodeNumber}`).then(() => {
    router.go(0)
  })
}
</script>

<style></style>
