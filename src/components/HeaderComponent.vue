<script setup lang="ts">
import { watch } from 'vue';
import { useRecipeBook } from '../stores/recipies';
import { storeToRefs } from 'pinia';

const RecipeStore = useRecipeBook();
const { searchquery } = storeToRefs(RecipeStore);
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
  },
);
</script>

<template>
  <header>
    <h3 class="text-4xl md:text-6xl p-8">
      Elevate Your <br />Dining Experience
    </h3>
  </header>
  <div class="py-8">
    <label for="small-input"></label>
    <input
      v-model="searchquery"
      type="text"
      id="small-input"
      placeholder="Search you recipe"
      class="w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs"
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
    url('../images/pics.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
