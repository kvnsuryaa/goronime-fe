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
      <div class="d-flex mb-2">
        <div class="me-auto mt-auto mb-auto h3">
          Schedule on <span class="text-primary">{{ props.type }}</span>
        </div>
        <el-button type="success" class="ms-auto" @click="visibleDialog = true">
          <i class="bi bi-plus-circle me-2"></i>
          Add
        </el-button>
      </div>
      <el-table :data="listSchedule" border style="width: 100%">
        <el-table-column prop="poster" label="Poster" width="150px">
          <template #default="scope">
            <div class="text-center">
              <img :src="scope.row.anime.poster" alt="poster" width="100px" height="130px" />
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="Title">
          <template #default="scope">
            <div class="text-center">
              {{ scope.row.anime.title }}
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="statusAnime" label="Status">
          <template #default="scope">
            <div class="text-center">
              {{ scope.row.anime.statusAnime }}
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Action">
          <template #default="scope">
            <el-button size="small" type="danger" @click="deleteData(scope.row.id)">
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog v-model="visibleDialog" title="Add Schedule" width="500">
        <el-form :model="payload" :label-position="'top'">
          <v-select
            v-model="animes"
            multiple
            :options="listAnime"
            :filterable="false"
            label="title"
            @search="searchAnime"
          >
            <template v-slot:no-options> Search for anime... </template>
            <template v-slot:option="option">
              <div class="d-center">
                <img :src="option.poster" class="v-select-img" />
                {{ option.title }}
              </div>
            </template>
            <template v-slot:selected-option="option">
              <div class="selected d-center">
                <img :src="option.poster" class="v-select-img" />
                {{ option.title }}
              </div>
            </template>
          </v-select>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="visibleDialog = false">Cancel</el-button>
            <el-button type="primary" @click="submitData"> Confirm </el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAnimeStore } from '@/stores/anime'
import { useScheduleStore } from '@/stores/schedule'
import { computed, onMounted, ref } from 'vue'

const props = defineProps(['type'])

const animeStore = useAnimeStore()
const scheduleStore = useScheduleStore()
const listAnime: any = computed(() => animeStore.anime)
const listSchedule = computed(() => scheduleStore.list)
const payload = computed(() => scheduleStore.payload)
const loadingPage = computed(() => scheduleStore.loadingPage)
const visibleDialog = ref(false)
const animes = ref([])

async function searchAnime(query: string, loading: Function) {
  const params = {
    search: query
  }
  if (query) {
    loading(true)
    setTimeout(async () => {
      await animeStore.getListAnime(params)
      loading(false)
    }, 200)
  } else {
    animeStore.anime = []
  }
}

async function init() {
  await scheduleStore.getListSchedule(props.type)
}

async function deleteData(id: string) {
  await scheduleStore.deleteSchedule(id)
  await init()
}

async function submitData() {
  let i = 0
  while (i < animes.value.length) {
    const anime: any = animes.value[i]
    payload.value.animes.push(anime.id)
    i++
  }
  payload.value.scheduleType = props.type.toUpperCase()
  await scheduleStore.createSchedule()
  visibleDialog.value = false
  animes.value = []
  await init()
}
</script>

<style>
.v-select-img {
  height: auto;
  max-width: 2.5rem;
  margin-right: 1rem;
}

.d-center {
  display: flex;
  align-items: center;
}

.selected .v-select-img {
  width: auto;
  max-height: 23px;
  margin-right: 0.5rem;
}

.v-select .dropdown li {
  border-bottom: 1px solid rgba(112, 128, 144, 0.1);
}

.v-select .dropdown li:last-child {
  border-bottom: none;
}

.v-select .dropdown li a {
  padding: 10px 20px;
  width: 100%;
  font-size: 1.25em;
  color: #3c3c3c;
}

.v-select .dropdown-menu .active > a {
  color: #fff;
}
</style>
