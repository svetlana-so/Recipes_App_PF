<template>
  <div v-if="recipe" class="recipe-container">
    <PrevButton />
    <h2 class="p-4 text-2xl text-center">{{ recipe.strMeal }}</h2>
    <div class="flex flex-wrap gap-10 p-5">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" class="recipe-image" />
      <div class="recipe-details">
        <h3 class="p-4 text-2xl">Ingredients:</h3>
        <table class="ingredient-table">
          <tbody>
            <tr v-for="i in 20" :key="i">
              <td v-if="recipe[`strIngredient${i}`]">{{ recipe[`strIngredient${i}`] }}</td>
              <td v-if="recipe[`strMeasure${i}`]">{{ recipe[`strMeasure${i}`] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="recipe-instructions">{{ formatInstructions(recipe.strInstructions) }}</p>
    </div>
  </div>
  <div v-else class="loading-message">
    <p>Loading...</p>
  </div>
</template>

<style scoped>
.recipe-image {
  width: 300px;
  height: 350px;
}
.ingredient-table {
  width: 140%;
  background-color: rgba(194, 198, 202, 0.318);
  border-radius: 25px;
}
.ingredient-table td {
  padding: 10px;
  text-align: left;
}
.recipe-instructions {
  line-height: 1.5;
}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';
import { formatInstructions } from '../stores/formatInstructions';

import PrevButton from './PrevButton.vue';
const { recipe } = defineProps(['recipe']);
</script>
