<script setup lang="ts">
import { watch } from 'vue';
import { storeToRefs } from 'pinia';
import { useRecipeBook } from '../stores/recipies';

const RecipeStore = useRecipeBook();
const { searchquery, user_name } = storeToRefs(RecipeStore);

watch(
  () => RecipeStore.searchquery,
  async (newQuery, oldQuery) => {
    if (newQuery.trim() !== '' && newQuery !== oldQuery) {
      try {
        await RecipeStore.getData(newQuery);
      } catch (error) {
        console.error(error);
      }
    }
  }
);
</script>

<template>
  <header>
    <h1 class="text-yellow-700 text-xl font-semibold md:text-4xl px-8 py-2">
      Hello, {{ user_name }}
    </h1>
    <h3 class="text-4xl md:text-6xl p-8">
      Elevate Your <br />Dining Experience
    </h3>
  </header>
  <div class="py-8 relative">
    <label for="small-input"></label>
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <i class="fa-solid fa-magnifying-glass" style="color: #3e3f42"></i>
    </div>
    <input
      v-model="searchquery"
      type="text"
      id="small-input"
      placeholder="Search you recipe"
      class="w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg sm:text-xs"
    />
  </div>
</template>

<style scoped>
header {
  height: 40vh;
  background: linear-gradient(
      to bottom right,
      rgb(255 255 255 / 30%),
      rgb(255 255 255 / 19%)
    ),
    url('../images/pics.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
