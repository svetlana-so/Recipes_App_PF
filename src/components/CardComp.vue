<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { recipe } = defineProps(['recipe']);

const navigateToRecipe = () => {
  router.push(`/recipe/${recipe.idMeal}`);
};
</script>

<template>
  <div class="card" @click="navigateToRecipe">
    <div class="image-box">
      <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
    </div>
    <div class="text-box">
      <h2 class="text-xl">{{ recipe.strMeal }}</h2>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 210px;
  height: 280px;
  overflow: hidden;
  position: relative;
}
.image-box {
  height: 100%;
}
.card .image-box img {
  width: auto;
  height: 90%;
  filter: grayscale(0) brightness(0.8);
  border-radius: 15px;
  scale: 1;
  transition:
    scale 2s ease-in-out,
    filter 1s ease-in-out;
}
.card:hover .image-box img {
  filter: grayscale(1) brightness(0.7);
  scale: 0.9;
}
.card .text-box {
  width: 80%;
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 8px;
}
.card:hover .text-box {
  transition: transform 2s ease; /* Add transition for smooth scaling */
  transform: translateX(-50%) scale(1.1); /* Scale the text on hover */
}
</style>
