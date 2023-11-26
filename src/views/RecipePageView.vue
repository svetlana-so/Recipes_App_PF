<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { formatInstructions } from '../stores/formatInstructions';
import PrevButton from '../components/PrevButton.vue';
import FavoritesButton from '../components/FavoritesButton.vue';
import { useRecipeBook } from '../stores/recipies';

const RecipeStore = useRecipeBook();
const { singleRecipe, filteredIngredients } = storeToRefs(RecipeStore);
const route = useRoute();
const recipeId = parseInt(route.params.id as string, 10);

onMounted(async () => {
  await RecipeStore.getSingleRecipe(recipeId);
});
</script>

<template>
  <div v-if="singleRecipe" class="recipe-container">
    <PrevButton />
    <h2 class="p-4 text-2xl text-center font-semibold">
      {{ singleRecipe.strMeal.toUpperCase() }}
    </h2>
    <div
      class="flex flex-col justify-center items-center gap-8 p-4 lg:flex-row"
    >
      <div class="relative">
        <img
          :src="singleRecipe.strMealThumb"
          :alt="singleRecipe.strMeal"
          class="object-cover h-350 w-300"
        />
        <FavoritesButton
          class="absolute top-0 right-0"
          @click="RecipeStore.ToggleFavoriteRecipes(singleRecipe.idMeal)"
        />
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">Ingredient name</th>
            <th scope="col" class="px-6 py-3">Mesurment</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(ingredient, index) in filteredIngredients"
            :key="index"
            class="bg-white border-b"
          >
            <th
              scope="row"
              class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap"
            >
              {{ ingredient.name }}
            </th>
            <td class="px-6 py-2">
              {{ ingredient.measure }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="bg-stone-100 p-2 rounded-xl">
      <p class="p-4">{{ formatInstructions(singleRecipe.strInstructions) }}</p>
    </div>
  </div>
  <div v-else class="loading-message">
    <p>Loading...</p>
  </div>
</template>

<style scoped></style>
