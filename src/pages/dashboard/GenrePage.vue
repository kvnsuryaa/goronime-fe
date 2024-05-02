<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex mb-2">
        <el-input
          v-model="search"
          style="width: 240px"
          class="me-auto"
          placeholder="Search Genre"
        />
        <el-button type="success" class="ms-auto" @click="visibleDialog = true">
          <i class="bi bi-plus-circle me-2"></i>
          Create
        </el-button>
      </div>
      <el-table :data="listGenre" border style="width: 100%">
        <el-table-column prop="name" label="Name" />
        <el-table-column label="Action">
          <template #default="scope">
            <el-button size="small" @click="scope"> Edit </el-button>
            <el-button size="small" type="danger" @click="scope"> Delete </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog v-model="visibleDialog" title="Create Category" width="500">
      <el-form :model="payload" :label-position="'top'">
        <el-form-item label="Category name">
          <el-input v-model="payload.name" autocomplete="off" placeholder="" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="visibleDialog = false">Cancel</el-button>
          <el-button type="primary" @click="submitData"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useGenreStore } from '@/stores/genre'
import { computed, onMounted, reactive, ref, toRefs } from 'vue'

const search = ref('')
const visibleDialog = ref(false)

const genreStore = useGenreStore()
const payload = genreStore.payload
const listGenre = computed(() => genreStore.list)
onMounted(async () => {
  await init()
})

async function init() {
  await genreStore.getListGenre()
}

async function submitData() {
  await genreStore.createGenre()
  visibleDialog.value = false
}
</script>

<style></style>
