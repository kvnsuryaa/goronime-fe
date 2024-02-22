<template>
  <div class="container-md container-fluid mt-4">
    <div class="row">
      <div class="col-12 col-md-8">
        <h3 class="text-white fw-bold heading-title mb-4">Recent Release</h3>
        <div class="d-flex flex-wrap" style="gap: 10px">
          <div
            class="anime-poster"
            v-for="(item, i) in 12"
            :key="i"
            @click="$router.push(`/anime/${item}`)"
          >
            <img
              src="https://cdn.myanimelist.net/images/anime/1752/139314.jpg"
              alt="anime_poster"
            />
            <p class="poster-episode">2</p>
            <p class="poster-type">TV</p>
            <p class="poster-title">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt beatae laboriosam
              ducimus odio libero vero quasi iste facilis voluptatum ab. Qui perspiciatis eos, dicta
              et ullam pariatur libero repellat modi?
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<style></style>
