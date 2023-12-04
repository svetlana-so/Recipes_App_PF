<script setup lang="ts">
import { useRouter } from 'vue-router';

import FavoritesButton from './FavoritesButton.vue';
import { useRecipeBook } from '../stores/recipies';

const RecipeStore = useRecipeBook();
const router = useRouter();
const { recipe } = defineProps(['recipe']);

const handleCardClick = (event: any) => {
  const isButtonClick = event.target.closest('.favorite-button');
  if (!isButtonClick && RecipeStore.isRecipeValid(recipe.idMeal)) {
    router.push(`/recipe/${recipe.idMeal}`);
  } else {
    RecipeStore.toggleFavoriteRecipes(recipe.idMeal);
  }
};
</script>

<template>
  <div class="item" @click="handleCardClick">
    <div class="polaroid">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
      <div class="favorite-button">
        <FavoritesButton :recipe="recipe" />
      </div>
      <div class="caption text-center text-sm overflow-clip md:text-2xl">
        {{ recipe.strMeal }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.favorite-button {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 15%;
  left: 80%;
  filter: none;
}

.polaroid {
  background: #fff;
  padding: 1rem;
  box-shadow: 0 0.2rem 1.2rem rgb(0 0 0 / 20%);
}

.polaroid > img {
  max-width: 100%;
  height: auto;
}

.item {
  width: 250px;
  display: inline-block;
  margin-top: 1rem;
  filter: grayscale(100%);
}

.item:hover {
  filter: none;
  transform: scale(1.1, 1.1) rotate(0deg) !important;
  transition: all 1s;
}
</style>
