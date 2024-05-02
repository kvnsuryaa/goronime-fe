<template>
  <div style="position: absolute; width: 100%; height: 100%">
    <el-container style="height: 100%; width: 100%">
      <el-aside class="sidebar-admin">
        <ul>
          <li>
            <i class="bi bi-bar-chart-line"></i>
            <span>Summary</span>
          </li>
          <li>
            <i class="bi bi-camera-reels"></i>
            <span>Anime</span>
          </li>
          <li>
            <i class="bi bi-calendar"></i>
            <span>Schedule</span>
          </li>
          <li>
            <i class="bi bi-box"></i>
            <span>Master Data</span>
          </li>
          <li>
            <i class="bi bi-people"></i>
            <span>Users</span>
          </li>
          <li>
            <i class="bi bi-box-arrow-in-left"></i>
            <span>Logout</span>
          </li>
        </ul>
      </el-aside>
      <el-container style="margin-left: 7rem">
        <el-header class="header-admin">
          <div class="d-flex w-100 h-100">
            <div class="ms-auto profile-info d-flex mt-auto mb-auto">
              <div class="profile-image"></div>
              <div class="profile-name">Admin</div>
            </div>
          </div>
        </el-header>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainHeader from './components/MainHeader.vue'

const menus = ref([
  {
    title: 'Summary',
    icon: 'bi bi-bar-chart-line',
    link: ''
  },
  {
    title: 'Anime',
    icon: 'bi bi-camera-reels',
    link: ''
  },
  {
    title: 'Schedule',
    icon: 'bi bi-calendar',
    link: ''
  },
  {
    title: 'Master Data',
    icon: 'bi bi-box',
    link: ''
  },
  {
    title: 'Users',
    icon: 'bi bi-people',
    link: ''
  }
])
</script>

<style scoped>
.auth-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
}

.auth-wave {
  position: absolute;
}

.wave-bottom {
  bottom: 0;
}

.wave-top {
  top: 0;
}
</style>
