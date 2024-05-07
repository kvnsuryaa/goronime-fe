<template>
  <div class="row">
    <div class="col-12">
      <div class="d-flex mb-2">
        <el-input
          v-model="search"
          style="width: 240px"
          class="me-auto"
          placeholder="Search Category"
        />
        <el-button type="success" class="ms-auto" @click="openCreateData">
          <i class="bi bi-plus-circle me-2"></i>
          Create
        </el-button>
      </div>
      <el-table :data="listGenre" border style="width: 100%">
        <el-table-column prop="name" label="Name" />
        <el-table-column label="Action">
          <template #default="scope">
            <el-button size="small" @click="setEditData(scope.row)"> Edit </el-button>
            <el-button size="small" type="danger" @click="deleteData(scope.row.id)">
              Delete
            </el-button>
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

    <el-dialog v-model="visibleDialogUpdate" title="Update Category" width="500">
      <el-form :model="payload" :label-position="'top'">
        <el-form-item label="Category name">
          <el-input v-model="payload.name" autocomplete="off" placeholder="" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="visibleDialogUpdate = false">Cancel</el-button>
          <el-button type="primary" @click="submitData('update')"> Confirm </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
import { computed, onMounted, ref } from 'vue'

const search = ref('')
const visibleDialog = ref(false)
const visibleDialogUpdate = ref(false)

const id = ref('')
const categoryStore = useCategoryStore()
const payload = categoryStore.payload
const listGenre = computed(() => categoryStore.list)
onMounted(async () => {
  await init()
})

async function init() {
  await categoryStore.getListCategory()
}

async function submitData(action: string) {
  if (action === 'update') {
    await categoryStore.updateCategory(id.value)
  } else {
    await categoryStore.createCategory()
  }
  visibleDialog.value = false
  visibleDialogUpdate.value = false
  await init()
}

async function deleteData(id: string) {
  await categoryStore.deleteCategory(id)
  await init()
}

async function setEditData(row: any) {
  id.value = row.id
  payload.name = row.name
  visibleDialogUpdate.value = true
}

async function openCreateData() {
  payload.name = ''
  visibleDialog.value = true
}
</script>

<style></style>
