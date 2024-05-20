<template>
  <div class="container-md container-fluid mt-4">
    <div class="row">
      <div class="col-12">
        <h2 class="text-white fw-bold heading-title mb-4">Schedule Anime</h2>
        <el-card>
          <div class="row">
            <div class="col-12">
              <el-tabs tab-position="left">
                <el-tab-pane label="Monday" :lazy="true">
                  <ScheduleList type="Monday" />
                </el-tab-pane>
                <el-tab-pane label="Tuesday" :lazy="true">
                  <ScheduleList type="Tuesday" />
                </el-tab-pane>
                <el-tab-pane label="Wednesday" :lazy="true">
                  <ScheduleList type="Wednesday" />
                </el-tab-pane>
                <el-tab-pane label="Thursday" :lazy="true">
                  <ScheduleList type="Thursday" />
                </el-tab-pane>
                <el-tab-pane label="Friday" :lazy="true">
                  <ScheduleList type="Friday" />
                </el-tab-pane>
                <el-tab-pane label="Saturday" :lazy="true">
                  <ScheduleList type="Saturday" />
                </el-tab-pane>
                <el-tab-pane label="Sunday" :lazy="true">
                  <ScheduleList type="Sunday" />
                </el-tab-pane>
                <el-tab-pane label="Random" :lazy="true">
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
import ScheduleList from '../../components/views/listSchedule.vue'
</script>

<style></style>
