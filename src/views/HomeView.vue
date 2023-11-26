<script setup lang="ts">
import { useRecipeBook } from '../stores/recipies';
import HeaderComponent from '../components/HeaderComponent.vue';
import SingleRecipeCard from '../components/SingleRecipeCard.vue';
import { storeToRefs } from 'pinia';

const RecipeStore = useRecipeBook();
const { recipes, numberOfRecipes } = storeToRefs(RecipeStore);
</script>

<template>
  <main>
    <HeaderComponent />
    <div>Recipes found: {{ numberOfRecipes }}</div>
    <div v-if="recipes" class="flex flex-wrap gap-12 py-8">
      <SingleRecipeCard
        v-for="recipe in recipes"
        :key="recipe.idMeal"
        :recipe="recipe"
      />
    </div>
    <div v-else>
      <p>Discover your favorite recipes</p>
    </div>
  </main>
</template>
