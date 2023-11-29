<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRecipeBook } from '../stores/recipies';

const RecipeStore = useRecipeBook();
const { favoritesRecipes } = storeToRefs(RecipeStore);
const { recipe } = defineProps(['recipe']);

function isFavorite(recipe: any) {
  const favorites = favoritesRecipes.value || [];
  return favorites.some((favorite) => favorite.idMeal === recipe.idMeal);
}
</script>

<template>
  <button
    class="favorite-button"
    type="button"
    :class="{ active: isFavorite(recipe) }"
  >
    <i
      v-if="isFavorite(recipe)"
      class="fa-solid fa-bookmark"
      style="color: #6a1515"
    ></i>
    <i v-else class="fa-regular fa-bookmark" style="color: #fffefe"></i>
  </button>
</template>

<style scoped>
.favorite-button {
  opacity: 0.9;
  cursor: pointer;
  padding: 1rem;
  font-size: 2.5rem;
}
</style>
