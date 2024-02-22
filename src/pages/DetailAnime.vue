<template>
  <div class="container-md container-fluid mt-4">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <div class="row mb-4">
          <div class="col-lg-12">
            <img
              src="https://cdn.myanimelist.net/images/anime/1752/139314.jpg"
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
            <h3 class="text-white fw-bold">Episodes</h3>
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
      <div class="col-lg-9 mb-3">
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
        <div class="row">
          <div class="col-12">
            <h3 class="text-white fw-bold">Reviews</h3>
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
import { RouterLink, RouterView, useRouter } from 'vue-router'

const router = useRouter()
function watchPage(item: any) {
  const slug = router.currentRoute.value.params.slug
  router.push(`/anime/${slug}/episode/${item}`)
}
</script>

<style></style>
