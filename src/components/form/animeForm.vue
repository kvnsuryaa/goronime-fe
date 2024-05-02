<template>
  <div class="container">
    <form @submit="submitData">
      <div class="row text-white">
        <div class="col-12">
          <div class="form-group mb-2">
            <label for="" class="form-label">Title</label>
            <input type="text" class="form-control" placeholder="Write here.." />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group mb-2">
            <label for="" class="form-label">Anime Slug</label>
            <input type="text" class="form-control" placeholder="Write here.." />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group mb-2">
            <label for="" class="form-label">Alternative Title</label>
            <input type="text" class="form-control" placeholder="Write here.." />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group mb-2">
            <label for="" class="form-label">Category</label>
            <input type="text" class="form-control" placeholder="Write here.." />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group mb-2">
            <label for="" class="form-label">Status</label>
            <input type="text" class="form-control" placeholder="Write here.." />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group mb-2">
            <label for="" class="form-label">Release Date</label>
            <input type="text" class="form-control" placeholder="Write here.." />
          </div>
        </div>
        <div class="col-6">
          <div class="form-group mb-2">
            <label for="" class="form-label">Total Episode</label>
            <input type="text" class="form-control" placeholder="Write here.." />
          </div>
        </div>
        <div class="col-12">
          <div class="form-group mb-2">
            <label for="" class="form-label">Synopsis</label>
            <textarea rows="6" class="form-control" placeholder="Write here.."></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const submitLoading = ref(false)
const router = useRouter()
const authStore = useAuthStore()
const payload = reactive({
  email: '',
  password: ''
})

onMounted(() => {})

async function login() {
  try {
    submitLoading.value = true
    await authStore.login(payload)
  } catch (err) {
    console.log(err)
  } finally {
    submitLoading.value = false
  }
}
</script>
