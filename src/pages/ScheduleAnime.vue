<template>
  <div class="container-md container-fluid mt-4">
    <div class="row">
      <div class="col-12">
        <h3 class="fw-bold heading-title mb-4">Schedule Anime</h3>
        <hr />
        <el-tabs v-model="selectedTab" type="card" class="demo-tabs" @tab-click="changeTab">
          <el-tab-pane name="Sunday" label="Sunday" class="" lazy>
            <template #label>
              <span>Sunday</span>
            </template>
            <ListPublicSchedule type="Sunday" />
          </el-tab-pane>
          <el-tab-pane name="Monday" label="Monday" class="" lazy>
            <template #label>
              <span>Monday</span>
            </template>
            <ListPublicSchedule type="Monday" />
          </el-tab-pane>
          <el-tab-pane name="Tuesday" label="Tuesday" class="" lazy>
            <template #label>
              <span>Tuesday</span>
            </template>
            <ListPublicSchedule type="Tuesday" />
          </el-tab-pane>
          <el-tab-pane name="Wednesday" label="Wednesday" class="" lazy>
            <template #label>
              <span>Wednesday</span>
            </template>
            <ListPublicSchedule type="Wednesday" />
          </el-tab-pane>
          <el-tab-pane name="Thursday" label="Thursday" class="" lazy>
            <template #label>
              <span>Thursday</span>
            </template>
            <ListPublicSchedule type="Thursday" />
          </el-tab-pane>
          <el-tab-pane name="Friday" label="Friday" class="" lazy>
            <template #label>
              <span>Friday</span>
            </template>
            <ListPublicSchedule type="Friday" />
          </el-tab-pane>
          <el-tab-pane name="Saturday" label="Saturday" class="" lazy>
            <template #label>
              <span>Saturday</span>
            </template>
            <ListPublicSchedule type="Saturday" />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ListPublicSchedule from '../components/views/listPublicSchedule.vue'
import type { TabsPaneContext } from 'element-plus'
import { useScheduleStore } from '@/stores/schedule'

const scheduleStore = useScheduleStore()
const selectedTab = ref('Sunday')
onMounted(async () => {
  await changeTab()
})

async function changeTab(tb?: TabsPaneContext) {
  const tabName = tb?.paneName as string
  scheduleStore.loadingPage = true
  await scheduleStore.getListSchedule(tabName || selectedTab.value)
  scheduleStore.loadingPage = false
}
</script>
