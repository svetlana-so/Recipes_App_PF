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
  <div class="card" @click="handleCardClick" @keydown.enter="handleCardClick">
    <div class="image-box">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
      <div class="favorite-button">
        <FavoritesButton data-testid="toggle-button" :recipe="recipe" />
      </div>
    </div>
    <div class="content caption text-center text-sm overflow-clip md:text-2xl">
      <h2>{{ recipe.strMeal }}</h2>
    </div>
  </div>
</template>

<style scoped>
.favorite-button {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 10%;
  left: 88%;
  filter: none;
}

.card {
  width: 200px;
  height: 300px;
  aspect-ratio: 1 / 0.7;
  border-radius: 8px;
  position: relative;
}

.card .image-box {
  width: 100%;
  height: 100%;
  border-radius: inherit;
}

.card .image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 90%;
  border-radius: inherit;
  transition: 0.5s ease-in-out;
}

.card::after {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid white;
  border-radius: inherit;
  opacity: 0;
  transition: 0.4s ease-in-out;
}

.card:hover img {
  filter: grayscale(1) brightness(0.4);
}

.card:hover::after {
  opacity: 1;
  inset: 20px;
}

.content {
  color: white;
  width: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.content h2 {
  opacity: 0;
  transition: 0.4s 0.2s ease;
  margin-bottom: 8px;
  scale: 0.7;
}

.card:hover .content h2 {
  scale: 1;
  opacity: 1;
}
</style>
