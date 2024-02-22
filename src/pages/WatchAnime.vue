<template>
  <div class="container-md container-fluid mt-4 mb-5">
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
          src="https://kevinsuryaa.sgp1.digitaloceanspaces.com/goronime/anime_vid.mp4"
        ></video>
        <button class="btn btn-sm btn-info"></button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-9">
        <div class="row mb-4">
          <div class="col-12">
            <div class="detail-anime">
              <div class="detail-anime-title">
                <h3 class="text-white fw-bold">
                  Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Shin Shou -
                  Meikyuu-hen
                </h3>
                <span class="text-secondary"
                  >Is It Wrong to Try to Pick Up Girls in a Dungeon? IV</span
                >
              </div>
              <div class="detail-anime-rating"></div>
              <div class="detail-anime-description text-secondary">
                Intrepid adventurer Bell Cranel has leveled up, but he can’t rest on his
                dungeoneering laurels just yet. The Hestia Familia still has a long way to go before
                it can stand toe-to-toe with the other Familias of Orario — but before Bell can set
                out on his next mission, reports of a brutal murder rock the adventuring community!
                One of Bell’s trusted allies stands accused of the horrible crime, and it’s up to
                Bell and his friends to clear their name and uncover a nefarious plot brewing in the
                dungeon’s dark depths.
              </div>
              <div class="detail-anime-others text-secondary">
                <div class="row mb-3">
                  <div class="col-lg-6">
                    <table class="table-detail-anime">
                      <tr>
                        <td width="50%">Type:</td>
                        <td width="50%" class="text-light">TV Series</td>
                      </tr>
                      <tr>
                        <td>Studio:</td>
                        <td class="text-light">Ghibli Studio</td>
                      </tr>
                      <tr>
                        <td>Status:</td>
                        <td class="text-light">Airing</td>
                      </tr>
                    </table>
                  </div>
                  <div class="col-lg-6">
                    <table class="table-detail-anime">
                      <tr>
                        <td width="50%">Date Aired:</td>
                        <td width="50%" class="text-light">Feb 18, 2023 to ?</td>
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
                        <td class="text-light">24</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button type="button" class="btn btn-sm me-1 btn-outline-secondary">
                      Action
                    </button>
                    <button type="button" class="btn btn-sm me-1 btn-outline-secondary">
                      Ecchi
                    </button>
                    <button type="button" class="btn btn-sm me-1 btn-outline-secondary">
                      Shounen
                    </button>
                    <button type="button" class="btn btn-sm me-1 btn-outline-secondary">
                      Seinen
                    </button>
                    <button type="button" class="btn btn-sm me-1 btn-outline-secondary">
                      Adventure
                    </button>
                    <button type="button" class="btn btn-sm me-1 btn-outline-secondary">
                      Historical
                    </button>
                    <button type="button" class="btn btn-sm me-1 btn-outline-secondary">
                      Comedy
                    </button>
                    <button type="button" class="btn btn-sm me-1 btn-outline-secondary">
                      Fantasy
                    </button>
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
            v-for="(item, i) in 24"
            :key="`epsd-${i}`"
            @click="watchPage(item)"
          >
            <div class="d-flex">
              <h6 class="mt-auto mb-auto me-3 ms-3">
                <i class="bi bi-play-circle text-white"></i>
              </h6>
              <div>
                <div class="text-white">Episode {{ item }}</div>
                <small class="text-secondary">Feb 18, 2023</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()
let current_episode = ref('')

onMounted(() => {
  const episode = router.currentRoute.value.params.episode_name
  console.log(episode)
  current_episode.value = `${episode}`
})

function watchPage(item: any) {
  const slug = router.currentRoute.value.params.slug
  router.push(`/anime/${slug}/episode/${item}`).then(() => {
    router.go(0)
  })
}
</script>

<style></style>
