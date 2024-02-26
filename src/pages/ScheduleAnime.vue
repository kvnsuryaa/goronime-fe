<template>
  <div class="container-md container-fluid mt-4">
    <div class="row">
      <div class="col-12">
        <h3 class="text-white fw-bold heading-title mb-4">Schedule Anime</h3>
        <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane name="minggu">
            <template #label>
              <span>Minggu</span>
            </template>
            <div class="d-flex flex-wrap" style="gap: 10px">
              <div
                class="anime-poster"
                v-for="(item, i) in 3"
                :key="i"
                @click="$router.push(`/anime/${item}`)"
              >
                <img
                  src="https://cdn.myanimelist.net/images/anime/1752/139314.jpg"
                  alt="anime_poster"
                />
                <p class="poster-type">TV</p>
                <p class="poster-title">
                  Tsuki ga Michibiku Isekai Douchuu Season 2 Subtitle Indonesia
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane name="senin">
            <template #label>
              <span>Senin</span>
            </template>
            <div class="d-flex flex-wrap" style="gap: 10px">
              <div
                class="anime-poster"
                v-for="(item, i) in 5"
                :key="i"
                @click="$router.push(`/anime/${item}`)"
              >
                <img
                  src="https://cdn.myanimelist.net/images/anime/1752/139314.jpg"
                  alt="anime_poster"
                />
                <p class="poster-type">TV</p>
                <p class="poster-title">
                  Tsuki ga Michibiku Isekai Douchuu Season 2 Subtitle Indonesia
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane name="selasa">
            <template #label>
              <span>Selasa</span>
            </template>
            <div class="d-flex flex-wrap" style="gap: 10px">
              <div
                class="anime-poster"
                v-for="(item, i) in 4"
                :key="i"
                @click="$router.push(`/anime/${item}`)"
              >
                <img
                  src="https://cdn.myanimelist.net/images/anime/1752/139314.jpg"
                  alt="anime_poster"
                />
                <p class="poster-type">TV</p>
                <p class="poster-title">
                  Tsuki ga Michibiku Isekai Douchuu Season 2 Subtitle Indonesia
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane name="rabu">
            <template #label>
              <span>Rabu</span>
            </template>
            <div class="d-flex flex-wrap" style="gap: 10px">
              <div
                class="anime-poster"
                v-for="(item, i) in 2"
                :key="i"
                @click="$router.push(`/anime/${item}`)"
              >
                <img
                  src="https://cdn.myanimelist.net/images/anime/1752/139314.jpg"
                  alt="anime_poster"
                />
                <p class="poster-type">TV</p>
                <p class="poster-title">
                  Tsuki ga Michibiku Isekai Douchuu Season 2 Subtitle Indonesia
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane name="kamis">
            <template #label>
              <span>Kamis</span>
            </template>
            <div class="d-flex flex-wrap" style="gap: 10px">
              <div
                class="anime-poster"
                v-for="(item, i) in 2"
                :key="i"
                @click="$router.push(`/anime/${item}`)"
              >
                <img
                  src="https://cdn.myanimelist.net/images/anime/1752/139314.jpg"
                  alt="anime_poster"
                />
                <p class="poster-type">TV</p>
                <p class="poster-title">
                  Tsuki ga Michibiku Isekai Douchuu Season 2 Subtitle Indonesia
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane name="jumaat">
            <template #label>
              <span>Jumaat</span>
            </template>
            <div class="d-flex flex-wrap" style="gap: 10px">
              <div
                class="anime-poster"
                v-for="(item, i) in 8"
                :key="i"
                @click="$router.push(`/anime/${item}`)"
              >
                <img
                  src="https://cdn.myanimelist.net/images/anime/1752/139314.jpg"
                  alt="anime_poster"
                />
                <p class="poster-type">TV</p>
                <p class="poster-title">
                  Tsuki ga Michibiku Isekai Douchuu Season 2 Subtitle Indonesia
                </p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane name="sabtu">
            <template #label>
              <span>Sabtu</span>
            </template>
            <div class="d-flex flex-wrap" style="gap: 10px">
              <div
                class="anime-poster"
                v-for="(item, i) in 1"
                :key="i"
                @click="$router.push(`/anime/${item}`)"
              >
                <img
                  src="https://cdn.myanimelist.net/images/anime/1752/139314.jpg"
                  alt="anime_poster"
                />
                <p class="poster-type">TV</p>
                <p class="poster-title">
                  Tsuki ga Michibiku Isekai Douchuu Season 2 Subtitle Indonesia
                </p>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const activeName = ref('minggu')
</script>

<style>
.is-active > span {
  color: #ffffff !important;
}

.el-tabs__item > span {
  color: rgb(108, 117, 125);
}
</style>
