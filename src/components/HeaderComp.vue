<script setup lang="ts">
import { recipeName } from '../views/recipeName';
</script>

<template>
  <header>
    <h3 class="text-4xl md:text-6xl p-8">Elevate Your <br />Dining Experience</h3>
  </header>
  <div class="p-6">
    <label for="small-input" class="mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
    <input
      type="text"
      id="small-input"
      placeholder="Search you recipe"
      v-model="recipeName"
      class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs"
    />
  </div>
</template>

<style scoped>
header {
  height: 40vh;
  background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.566),
      rgba(255, 255, 255, 0.046)
    ),
    url('./images/pics.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
