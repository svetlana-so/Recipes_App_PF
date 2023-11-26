<script setup lang="ts">
import { useRecipeBook } from '../stores/recipies'
import HeaderComponent from '../components/HeaderComponent.vue'
import SingleRecipeCard from '../components/SingleRecipeCard.vue'
import { storeToRefs } from 'pinia'

const RecipeStore = useRecipeBook()
const { recipes, numberOfRecipes } = storeToRefs(RecipeStore)
</script>

<template>
  <main>
    <HeaderComponent />
    <div>Recipes found: {{ numberOfRecipes }}</div>
    <div v-if="recipes" class="cards">
      <SingleRecipeCard v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" />
    </div>
    <div v-else>
      <p>Discover your favorite recipes</p>
    </div>
  </main>
</template>

<style scoped>
.cards {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
  text-align: center;
}
</style>
