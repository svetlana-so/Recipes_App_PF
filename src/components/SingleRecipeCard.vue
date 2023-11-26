<script setup lang="ts">
import FavoritesButton from './FavoritesButton.vue'
import { useRouter } from 'vue-router'
import { useRecipeBook } from '../stores/recipies'

const RecipeStore = useRecipeBook()
const router = useRouter()
const { recipe } = defineProps(['recipe'])

const handleCardClick = (event: any) => {
  const isButtonClick = event.target.closest('.favorite-button')
  if (!isButtonClick) {
    router.push(`/recipe/${recipe.idMeal}`)
  } else {
    // Handle the favorites action (e.g., add to favorites)
    RecipeStore.ToggleFavoriteRecipes(recipe.idMeal)
  }
}
</script>

<template>
  <div class="card" @click="handleCardClick">
    <div class="image-box">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
    </div>
    <div class="favorite-button">
      <FavoritesButton />
    </div>
    <div class="text-box">
      <h2 class="text-xl">{{ recipe.strMeal }}</h2>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 250px;
  height: 300px;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
}
.image-box {
  position: absolute;
  height: 100%;
}
.card .image-box img {
  width: auto;
  height: 100%;
  filter: grayscale(0) brightness(0.8);
  scale: 1.1;
  transition:
    scale 2s ease-in-out,
    filter 1s ease-in-out;
}
.card:hover .image-box img {
  filter: grayscale(1) brightness(0.7);
  scale: 1;
}
.card .text-box {
  width: 95%;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 4px;
}
.card .favorite-button {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 15%;
  left: 80%;
}
</style>
