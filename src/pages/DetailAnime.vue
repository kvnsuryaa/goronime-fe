<template>
  <div class="container-md container-fluid mt-4" v-if="!loadingPage && detail">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <div class="row mb-4">
          <div class="col-lg-12">
            <img
              :src="detail.poster || '/broken_image2.webp'"
              alt=""
              width="100%"
              height="350px"
              class="rounded shadow"
            />
          </div>
          <div class="col-lg-12 mt-2">
            <button class="btn w-100 btn-success">
              <i class="bi bi-bookmark me-1"></i>
              <span>Bookmark</span>
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h3 class="fw-bold">Episodes</h3>
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
                    <i class="bi bi-play-circle"></i>
                  </h6>
                  <div>
                    <div class="">Episode {{ item.episodeNumber }}</div>
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
      <div class="col-lg-9 mb-3">
        <div class="row mb-4">
          <div class="col-12">
            <div class="detail-anime">
              <div class="detail-anime-title">
                <h3 class="fw-bold">
                  {{ detail.title || 'No Title' }}
                </h3>
                <span class="text-secondary">
                  {{ detail.alternateTitle || '' }}
                </span>
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
                        <!-- <td width="50%" class="">TV Series</td> -->
                        <td width="50%" class="">{{ detail.category.name || '-' }}</td>
                      </tr>
                      <tr>
                        <td>Studio:</td>
                        <td class="">{{ detail.studio.name }}</td>
                      </tr>
                      <tr>
                        <td>Status:</td>
                        <td class="">{{ detail.statusAnime }}</td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-6">
                    <table class="table-detail-anime">
                      <tr>
                        <td width="50%">Date Aired:</td>
                        <td width="50%" class="">{{ detail.releaseDate || '-' }}</td>
                      </tr>
                      <tr>
                        <td>Rating:</td>
                        <td class="">
                          <i class="bi bi-star-fill me-1"></i>
                          <span>8.35</span>
                        </td>
                      </tr>
                      <tr>
                        <td>Total Episode:</td>
                        <td class="">{{ detail.totalEpisode || '-' }}</td>
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
        <div class="row">
          <div class="col-12">
            <h3 class="fw-bold">Reviews</h3>
            <div>
              <textarea
                class="form-control"
                rows="4"
                style="resize: none"
                placeholder="Write review about the show..."
              ></textarea>
              <div class="mt-2 text-end">
                <button class="btn btn-sm btn-primary">
                  <i class="bi bi-send-fill me-2"></i>
                  <span>Review</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import moment from 'moment'
import { computed, onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAnimeStore } from '../stores/anime'
import { ElLoading } from 'element-plus'

let loadingPage = ref(false)
const router = useRouter()
const animeStore = useAnimeStore()
const slug = router.currentRoute.value.params.slug as string
function watchPage(item: any) {
  router.push(`/anime/${slug}/episode/${item.episodeNumber}`)
}

const detail: any = computed(() => {
  return animeStore.detail
})

onMounted(async () => {
  loadingPage.value = true
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  await animeStore.getDetailAnime(slug)
  console.log(detail)
  setTimeout(() => {
    loadingPage.value = false
    loading.close()
  }, 500)
})
</script>

<style></style>
