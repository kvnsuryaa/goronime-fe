<template>
  <h2 class="text-white fw-bold heading-title mb-4">
    <span v-if="isUpdate">Update</span>
    <span v-else>Create</span>
    <span> Anime </span>
  </h2>
  <el-card>
    <el-form label-position="top" :model="payload" label-width="auto">
      <div class="row">
        <div class="col-6">
          <el-form-item label="Title">
            <el-input v-model="payload.title" maxlength="512" show-word-limit />
          </el-form-item>
        </div>
        <div class="col-6">
          <el-form-item label="Alternative Title">
            <el-input v-model="payload.alternateTitle" maxlength="512" show-word-limit />
          </el-form-item>
        </div>
        <div class="col-12">
          <el-form-item label="Anime Slug">
            <el-input v-model="payload.slug" />
          </el-form-item>
        </div>
        <div class="col-4">
          <el-form-item label="Category">
            <el-select v-model="payload.categoryId" placeholder="Select">
              <el-option
                v-for="item in categoryList"
                :key="`category-${item.id}`"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </div>
        <div class="col-4">
          <el-form-item label="Status">
            <el-select v-model="payload.statusAnime" placeholder="Select">
              <el-option v-for="item in statusAnimeList" :key="item" :label="item" :value="item" />
            </el-select>
          </el-form-item>
        </div>
        <div class="col-4">
          <el-form-item label="Studio">
            <el-select v-model="payload.studioId" placeholder="Select">
              <el-option
                v-for="item in studioList"
                :key="`studio-${item.id}`"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </div>
        <div class="col-6">
          <el-form-item label="Release Date">
            <el-input type="date" v-model="payload.releaseDate" />
          </el-form-item>
        </div>
        <div class="col-6">
          <el-form-item label="Total Episode">
            <el-input-number
              v-model="payload.totalEpisode"
              :min="0"
              controls-position="right"
              width="100%"
              style="width: 100%"
            />
          </el-form-item>
        </div>
        <div class="col-12">
          <el-form-item label="Synopsis" prop="desc">
            <el-input
              v-model="payload.synopsis"
              maxlength="1020"
              show-word-limit
              placeholder="Please input"
              type="textarea"
              rows="8"
            />
          </el-form-item>
        </div>
        <div class="col-12">
          <el-form-item label="Genre" prop="desc">
            <el-select v-model="payload.genres" multiple placeholder="Select">
              <el-option
                v-for="item in genreList"
                :key="`genre-${item.id}`"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </div>
        <div class="col-4">
          <el-form-item label="Poster">
            <el-upload
              class="poster-uploader"
              action="#"
              :multiple="false"
              :auto-upload="false"
              :show-file-list="false"
              :on-change="handleUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="poster" />
              <i v-else class="bi bi-plus poster-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-end">
          <el-button type="default" @click.prevent="router.push('/dashboard/anime/list')">
            <i class="bi bi-arrow-left me-2"></i>
            <span>Back</span>
          </el-button>
          <el-button type="success" @click.prevent="submitData">
            <i class="bi bi-check-circle me-2"></i>
            <span>Save</span>
          </el-button>
        </div>
      </div>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { useAnimeStore } from '@/stores/anime'
import { useCategoryStore } from '@/stores/category'
import { useGenreStore } from '@/stores/genre'
import { useStudioStore } from '@/stores/studio'
import { useUploadStore } from '@/stores/upload'
import { onMounted, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { UploadFile } from 'element-plus'

// stores
const genreStore = useGenreStore()
const studioStore = useStudioStore()
const categoryStore = useCategoryStore()
const animeStore = useAnimeStore()
const uploadStore = useUploadStore()

const router = useRouter()
const imageUrl = ref('')
const posterTemp = ref(null)
const isUpdate = ref(false)
const payload = animeStore.payload
const currentRoute = router.currentRoute.value

const statusAnimeList = animeStore.statusAnime
const genreList: any = computed(() => genreStore.list)
const studioList: any = computed(() => studioStore.list)
const categoryList: any = computed(() => categoryStore.list)
const detailAnime: any = computed(() => animeStore.detail)

onMounted(async () => {
  if (currentRoute.name === 'upateAnimeAdmin') {
    isUpdate.value = true
    const { slug } = currentRoute.params
    await animeStore.getDetailAnime(slug as string)
    payload.title = detailAnime.value.title
    payload.alternateTitle = detailAnime.value.alternateTitle
    payload.slug = detailAnime.value.slug
    payload.synopsis = detailAnime.value.synopsis
    payload.categoryId = detailAnime.value.categoryId
    payload.studioId = detailAnime.value.studioId
    payload.statusAnime = detailAnime.value.statusAnime
    payload.releaseDate = detailAnime.value.releaseDate
    payload.totalEpisode = detailAnime.value.totalEpisode
    payload.poster = detailAnime.value.poster

    imageUrl.value = detailAnime.value.poster

    // genre
    const genreIds = []
    let i = 0
    while (i < detailAnime.value.animeGenre.length) {
      const genre = detailAnime.value.animeGenre[i].genre
      const genreId = genre.id
      genreIds.push(genreId)
      i++
    }
    payload.genres = genreIds
  }

  await init()
})

async function handleUpload(file: UploadFile) {
  posterTemp.value = file as any
  const raw = file.raw
  if (file && raw) {
    const reader = new FileReader()

    reader.onload = function (e: any) {
      const blob = new Blob([e.target.result], { type: raw.type })
      const blobUrl = URL.createObjectURL(blob)
      imageUrl.value = blobUrl
    }

    reader.readAsArrayBuffer(raw)
  }
}

async function init() {
  await genreStore.getListGenre()
  await studioStore.getListStudio()
  await categoryStore.getListCategory()
}

async function submitData() {
  // uploading file to cloud
  if (posterTemp.value) {
    const formData = new FormData()
    const posterValue: any = posterTemp.value
    formData.append('file', posterValue.raw)
    const res = await uploadStore.uploadFile(formData)
    const posterUrl: string = res.data || ''
    payload.poster = posterUrl
  }
  if (isUpdate.value) {
    const animeId: string = detailAnime.value.id
    const success = await animeStore.updateAnime(animeId, payload)
    if (!success) {
      alert('Error on update anime')
      return false
    }
  } else {
    const success = await animeStore.createAnime(payload)
    if (!success) {
      alert('Error on create anime')
      return false
    }
  }

  router.push('/dashboard/anime/list')
}
</script>
