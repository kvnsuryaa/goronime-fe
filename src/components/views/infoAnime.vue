<template>
  <table class="table table-bordered" v-if="detail">
    <tbody>
      <tr>
        <td width="200px">Alternative Title</td>
        <td>{{ detail.alternateTitle || '-' }}</td>
      </tr>
      <tr>
        <td>Status Anime</td>
        <td>{{ detail.statusAnime || '-' }}</td>
      </tr>
      <tr>
        <td>Slug</td>
        <td>{{ detail.slug || '-' }}</td>
      </tr>
      <tr>
        <td>Studio</td>
        <td>{{ detail.studio.name || '-' }}</td>
      </tr>
      <tr>
        <td>Category</td>
        <td>{{ detail.category.name || '-' }}</td>
      </tr>
      <tr>
        <td>Release Date</td>
        <td>{{ detail.releaseDate || '-' }}</td>
      </tr>
      <tr>
        <td>Total Episode</td>
        <td>{{ detail.totalEpisode || '-' }}</td>
      </tr>
      <tr>
        <td>Synopsis</td>
        <td>{{ detail.synopsis || '-' }}</td>
      </tr>
      <tr>
        <td>Genre</td>
        <td>
          <a
            href=""
            class="btn btn-sm me-1 btn-outline-secondary"
            v-for="(item, i) in detail.animeGenre"
            :key="`genre-${i}`"
          >
            {{ item.genre.name }}
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
const props = defineProps(['detail'])
</script>
