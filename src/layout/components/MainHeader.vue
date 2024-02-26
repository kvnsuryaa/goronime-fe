<template>
  <nav class="navbar navbar-expand-lg pt-3 pb-3 bg-goronime-primary">
    <div class="container-fluid container-lg">
      <a class="navbar-brand" href="#">Goronime</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <el-icon><Menu /></el-icon>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active">Home</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Anime List</a>
          </li>
          <li class="nav-item">
            <router-link to="/schedule" class="nav-link">Schedule</router-link>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Upcoming Anime</a>
          </li> -->
        </ul>
        <button class="btn btn-outline-primary" @click="$router.push('/auth/signin')">
          Sign In
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style></style>
