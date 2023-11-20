<template>
  <RecipeComponent :recipe="recipe" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import type { Recipe } from '../stores/data';
import getRecipeById from '../stores/getRecipeById';
import RecipeComponent from '@/components/RecipeComponent.vue';

const route = useRoute();
const recipeId = parseInt(route.params.id as string, 10);
const recipe = ref<Recipe | null>(null);

onMounted(async () => {
  try {
    const response = await getRecipeById(recipeId);
    recipe.value = response;
  } catch (error) {
    console.error(error);
  }
});
</script>
