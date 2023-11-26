<script setup lang="ts">
import { storeToRefs } from 'pinia';
import PrevButton from '../components/PrevButton.vue';
import { useRecipeBook } from '../stores/recipies';
import SingleRecipeCard from '@/components/SingleRecipeCard.vue';
const RecipeStore = useRecipeBook();
const { favoritesRecipes } = storeToRefs(RecipeStore);
</script>

<template>
  <PrevButton />
  <div
    v-if="favoritesRecipes && favoritesRecipes.length > 0"
    class="flex flex-wrap justify-center gap-8"
  >
    <SingleRecipeCard
      v-for="recipe in favoritesRecipes"
      :key="recipe.idMeal"
      :recipe="recipe"
    />
  </div>
  <div v-else class="text-center p-8">
    <p>You don't have favorite recipes yet.</p>
  </div>
</template>
