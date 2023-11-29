<template>
  <div class="flex flex-row p-6 gap-4 text-m md:text-2xl">
    <RouterLink active-class="active" to="/">Home</RouterLink>
    <RouterLink active-class="active" to="/favorites">Favorites</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.active {
  font-weight: 900;
  color: rgb(63 142 63);
  text-decoration: underline;
}
</style>
