<script setup lang="ts">
import { recipes } from './recipeName';
import CardComp from '../components/CardComp.vue';
import HeaderComp from '../components/HeaderComp.vue';
</script>

<template>
  <main>
    <HeaderComp />
    <div v-if="recipes.length > 0" class="cards">
      <CardComp v-for="recipe in recipes" :key="recipe.idMeal" :recipe="recipe" />
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
  gap: 25px;
  justify-content: center;
  text-align: center;
}
</style>
