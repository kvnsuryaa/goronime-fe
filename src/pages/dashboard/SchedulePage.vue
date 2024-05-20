<template>
  <div class="container-md container-fluid mt-4">
    <div class="row">
      <div class="col-12">
        <h2 class="text-white fw-bold heading-title mb-4">Schedule Anime</h2>
        <el-card>
          <div class="row">
            <div class="col-12">
              <el-tabs tab-position="left" v-model="selectedTab" @tab-click="changeTab">
                <el-tab-pane name="Monday" label="Monday" lazy>
                  <ScheduleList type="Monday" />
                </el-tab-pane>
                <el-tab-pane name="Tuesday" label="Tuesday" lazy>
                  <ScheduleList type="Tuesday" />
                </el-tab-pane>
                <el-tab-pane name="Wednesday" label="Wednesday" lazy>
                  <ScheduleList type="Wednesday" />
                </el-tab-pane>
                <el-tab-pane name="Thursday" label="Thursday" lazy>
                  <ScheduleList type="Thursday" />
                </el-tab-pane>
                <el-tab-pane name="Friday" label="Friday" lazy>
                  <ScheduleList type="Friday" />
                </el-tab-pane>
                <el-tab-pane name="Saturday" label="Saturday" lazy>
                  <ScheduleList type="Saturday" />
                </el-tab-pane>
                <el-tab-pane name="Sunday" label="Sunday" lazy>
                  <ScheduleList type="Sunday" />
                </el-tab-pane>
                <el-tab-pane name="Random" label="Random" lazy>
                  <ScheduleList type="Random" />
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ScheduleList from '../../components/views/listSchedule.vue'
import { useScheduleStore } from '@/stores/schedule'
import type { TabsPaneContext } from 'element-plus'

const scheduleStore = useScheduleStore()
const selectedTab = ref('Monday')

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

<style></style>
