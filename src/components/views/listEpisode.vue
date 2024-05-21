<template>
  <div v-if="loadingPage">
    <div class="d-flex w-100 h-100">
      <div class="spinner-border mt-auto mb-auto ms-auto me-auto" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
  <div class="row" v-else>
    <div class="col-12">
      <!-- <el-empty description="No Episode">
      <el-button type="primary">Add Episode</el-button>
    </el-empty> -->
      <div>
        <div class="d-flex mb-3">
          <el-button type="success" class="ms-auto" @click.prevent="visibleDialog = true">
            <i class="bi bi-plus-circle me-2"></i>
            <span>Episode</span>
          </el-button>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Episode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in listEpisode" :key="i">
              <td>Episode {{ item.episodeNumber }}</td>
              <td>
                <el-button type="primary" @click.prevent="previewEpisode(item)">Preview</el-button>
                <el-button type="danger" @click.prevent="deleteEpisode(item)">Remove</el-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <el-dialog v-model="visibleDialog" title="Add Schedule" width="600">
        <el-form :model="payload" :label-position="'top'">
          <el-form-item label="Episode Number">
            <el-input-number v-model="payload.episodeNumber" class="w-100" :min="1" />
          </el-form-item>
          <el-form-item label="Episode Number">
            <input type="file" class="form-control p-2" accept="video/*" @change="onFileChange" />
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="visibleDialog = false" :disabled="loadingSubmit">Cancel</el-button>
            <el-button type="primary" @click="submitData" :disabled="loadingSubmit">
              <div class="spinner-border spinner-border-sm me-2" role="status" v-if="loadingSubmit">
                <span class="visually-hidden">Loading...</span>
              </div>
              <span>Confirm</span>
            </el-button>
          </div>
        </template>
      </el-dialog>
      <el-dialog v-model="visiblePreview" title="Preview Episode" style="min-width: 900px">
        <div class="d-flex">
          <div
            class="spinner-border mt-auto mb-auto ms-auto me-auto"
            role="status"
            v-if="loadingPreview"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
          <div v-else>
            <video
              width="100%"
              height="500"
              disableremoteplayback
              webkit-playsinline
              playsinline
              controls
              class="video-anime"
              :src="detailEpisode.episodeSource"
            ></video>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnimeStore } from '@/stores/anime'
import { useEpisodeStore } from '@/stores/episode'
import { computed, ref } from 'vue'

const animeStore = useAnimeStore()
const episodeStore = useEpisodeStore()

const detailAnime: any = computed(() => animeStore.detail)
const loadingPage = computed(() => episodeStore.loadingPage)
const listEpisode: any = computed(() => episodeStore.list)
const detailEpisode: any = computed(() => episodeStore.episode)
const payload = computed(() => episodeStore.payload)
const visibleDialog = ref(false)
const loadingSubmit = ref(false)
const loadingPreview = ref(false)
const visiblePreview = ref(false)
const file = ref()

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  if (target && target.files) {
    file.value = target.files[0]
  }
}

function uploadProgress(progress: any) {
  console.log(progress)
}

async function submitData() {
  loadingSubmit.value = true
  const formData = new FormData()
  formData.append('file', file.value)
  const res: any = await episodeStore.uploadEpisode(formData, uploadProgress)
  const url: string = res.data
  payload.value.episodeSource = url
  await episodeStore.createEpisode(detailAnime.value.id)
  await episodeStore.getListEpisode(detailAnime.value.slug)
  loadingSubmit.value = false
  visibleDialog.value = false
}

async function previewEpisode(row: any) {
  loadingPreview.value = true
  visiblePreview.value = true
  await episodeStore.getDetailEpisode(detailAnime.value.slug, row.episodeNumber)
  loadingPreview.value = false
}

async function deleteEpisode(row: any) {
  await episodeStore.deleteEpisode(detailAnime.value.animeId, row.id)
}
</script>
