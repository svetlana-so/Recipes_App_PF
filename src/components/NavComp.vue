<template>
  <div class="flex flex-row justify-between py-8">
    <div class="flex flex-row p-6 gap-4 text-m md:text-2xl">
      <RouterLink class="hover:underline" active-class="active" to="/"
        >Home</RouterLink
      >
      <RouterLink class="hover:underline" active-class="active" to="/favorites"
        >Favorites</RouterLink
      >
    </div>
    <div class="logo"></div>
    <div class="flex flex-row p-6 gap-4 text-m md:text-2xl">
      <p>About</p>
      <p>Contact</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.active {
  font-weight: 900;
  color: rgb(221 186 90);
  text-decoration: underline;
}

.logo {
  width: 300px;
  height: 80px;
  background-image: url('@/images/logo.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
