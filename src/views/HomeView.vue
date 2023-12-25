<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRecipeBook } from '../stores/recipies';
import HeaderComponent from '../components/HeaderComponent.vue';
import SingleRecipeCard from '../components/SingleRecipeCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const RecipeStore = useRecipeBook();
const { recipes, numberOfRecipes, isLoggedIn } = storeToRefs(RecipeStore);
const showPopup = ref(true);

const toLoginPage = (event: any) => {
  router.push(`/login`);
  hidePopup();
};

const hidePopup = () => {
  showPopup.value = false;
};
</script>

<template>
  <main>
    <HeaderComponent />
    <div v-if="showPopup && !isLoggedIn">
      <div class="popup flex flex-col justify-center items-start">
        <h1 class="text-6xl font-semibold m-10 text-white">WELCOME</h1>
        <h1 class="text-4xl font-semibold m-10">
          Discover the perfect <br />recipes for any occasion!
        </h1>
        <button
          @click="toLoginPage"
          type="button"
          class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 my-4 mx-10"
        >
          Let's get started
        </button>
      </div>
    </div>
    <div class="flex justify-end">Recipes found: {{ numberOfRecipes }}</div>
    <div
      v-if="recipes.length > 0"
      class="flex flex-wrap justify-evenly gap-2 py-8"
    >
      <SingleRecipeCard
        v-for="recipe in recipes"
        :key="recipe.idMeal"
        :recipe="recipe"
      />
    </div>
    <div v-else class="my-10 flex justify-center">
      <p data-testid="welcome-page" class="text-slate-400">
        Discover your favorite recipes
      </p>
      <i
        class="m-1 mx-6 fa-solid fa-magnifying-glass fa-fade"
        style="color: #52565b"
      ></i>
    </div>
  </main>
</template>

<style scoped>
.popup {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url('../images/welmess.jpg');
  background-size: cover;
  background-position: center;
  z-index: 99;
}
</style>
