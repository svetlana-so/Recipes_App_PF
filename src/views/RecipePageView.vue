<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { formatInstructions } from '../stores/formatInstructions';
import PrevButton from '../components/PrevButton.vue';
import CommentsComponent from '../components/CommentsComponent.vue';
import { useRecipeBook } from '../stores/recipies';

const RecipeStore = useRecipeBook();
const { singleRecipe, filteredIngredients } = storeToRefs(RecipeStore);
const route = useRoute();
const recipeId = parseInt(route.params.id as string, 10);

onMounted(async () => {
  await RecipeStore.getSingleRecipe(recipeId);
});

const openYoutube = () => {
  if (singleRecipe.value) {
    window.open(singleRecipe.value.strYoutube, '_blank');
  }
};
const openSource = () => {
  if (singleRecipe.value) {
    window.open(singleRecipe.value.strSource, '_blank');
  }
};
</script>

<template>
  <PrevButton />
  <div v-if="singleRecipe" class="recipe-container">
    <h2
      data-testid="recipe-name"
      class="p-4 text-4xl text-center font-semibold"
    >
      {{ singleRecipe.strMeal.toUpperCase() }}
    </h2>
    <div class="sources flex flex-row justify-center sm:justify-end">
      <button
        @click="openYoutube"
        class="focus:outline-none text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        YouTube
      </button>
      <button
        @click="openSource"
        class="focus:outline-none text-white bg-teal-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Source
      </button>
    </div>
    <div
      class="flex flex-col justify-center items-center gap-8 p-4 lg:flex-row"
    >
      <div class="image-card relative flex flex-col items-center">
        <img
          :src="singleRecipe.strMealThumb"
          :alt="singleRecipe.strMeal"
          class="object-cover h-64 w-64 sm:h-96 sm:w-96 p-4"
        />
        <div
          class="aditional-information flex flex-col sm:flex-row justify-between gap-4 p-2"
        >
          <div
            class="ingregients rounded-lg flex flex-col text-center bg-blue-200 p-4"
          >
            <p class="font-bold">Ingredients</p>
            <p>{{ filteredIngredients.length }}</p>
          </div>
          <div
            class="category rounded-lg flex flex-col text-center bg-teal-200 p-4"
          >
            <p class="font-bold">Category</p>
            <p>{{ singleRecipe.strCategory }}</p>
          </div>
          <div
            class="origin rounded-lg flex flex-col text-center bg-yellow-200 p-4"
          >
            <p class="font-bold">Origin</p>
            <p>{{ singleRecipe.strArea }}</p>
          </div>
        </div>
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
  <div v-else class="flex flex-col text-2xl items-center gap-10 m-16">
    <div>
      <i
        class="fa-solid fa-spinner fa-spin fa-2xl"
        style="color: rgb(59 58 61)"
      ></i>
    </div>
    <p>Loading</p>
    <span>This may take a few seconds, please don't close this page.</span>
  </div>
  <CommentsComponent :recipeId="recipeId" />
</template>

<style scoped>
h2 {
  font-family: 'Marker Felt', fantasy;
}
</style>
