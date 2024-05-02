<template>
  <div class="row">
    <div class="col-12">
      <h2 class="text-white fw-bold heading-title mb-4">Master Data</h2>
      <div class="card">
        <div class="card-body p-3">
          <div class="row">
            <div class="col-2">
              <nav class="nav nav-pills flex-column">
                <template v-for="(item, i) in menus" :key="i">
                  <RouterLink
                    :class="`nav-link ${item.name.toLowerCase() === routerName ? 'active' : ''}`"
                    :to="item.link"
                  >
                    {{ item.name }}
                  </RouterLink>
                </template>
              </nav>
            </div>
            <div class="col-10">
              <RouterView />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routerName = computed(() => router.currentRoute.value.name)

const menus = ref([
  {
    name: 'Genre',
    link: '/dashboard/master/genre'
  },
  {
    name: 'Category',
    link: '/dashboard/master/category'
  },
  {
    name: 'Studio',
    link: '/dashboard/master/studio'
  }
])
</script>

<style></style>
