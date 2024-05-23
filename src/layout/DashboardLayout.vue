<template>
  <div style="position: absolute; width: 100%; height: 100%">
    <el-container style="height: 100%; width: 100%">
      <el-aside class="sidebar-admin">
        <ul>
          <li v-for="(item, i) in menus" :key="i" @click.prevent="$router.push(item.link)">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </li>
          <li @click.prevent="logout">
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
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const menus = ref([
  {
    name: 'Summary',
    icon: 'bi bi-bar-chart-line',
    link: '/dashboard/summary'
  },
  {
    name: 'Anime',
    icon: 'bi bi-camera-reels',
    link: '/dashboard/anime'
  },
  {
    name: 'Schedule',
    icon: 'bi bi-calendar',
    link: '/dashboard/schedule'
  },
  {
    name: 'Master Data',
    icon: 'bi bi-box',
    link: '/dashboard/master'
  },
  {
    name: 'Accounts',
    icon: 'bi bi-people',
    link: '/dashboard/accounts'
  }
])

async function logout() {
  await authStore.logout()
  router.push('/')
}
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
