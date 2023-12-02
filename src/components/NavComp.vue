<script setup lang="ts">
import { watchEffect } from 'vue';
import { useRecipeBook } from '../stores/recipies';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';
const RecipeStore = useRecipeBook();
const { isLoggedIn } = storeToRefs(RecipeStore);

watchEffect(() => {
  isLoggedIn.value = localStorage.getItem('user_name') !== null;
});
</script>

<template>
  <div class="flex flex-row justify-between py-8">
    <div class="flex flex-row items-center p-6 gap-4 text-m md:text-2xl">
      <RouterLink class="hover:underline" active-class="active" to="/"
        >Home</RouterLink
      >
      <RouterLink class="hover:underline" active-class="active" to="/favorites"
        >Favorites</RouterLink
      >
    </div>
    <div class="logo"></div>
    <div class="flex flex-row items-center p-6 gap-4 text-m md:text-2xl">
      <p>About</p>
      <RouterLink
        v-if="!isLoggedIn"
        class="hover:underline"
        active-class="active"
        to="/login"
        ><button
          class="h-10 px-5 m-2 text-sm text-white transition-colors duration-150 bg-yellow-600 rounded-lg focus:shadow-outline hover:bg-yellow-700"
        >
          Log In
        </button></RouterLink
      >
      <button
        @click="RecipeStore.logout"
        v-if="isLoggedIn"
        class="h-10 px-5 m-2 text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-700"
      >
        Log Out
      </button>
    </div>
  </div>
</template>

<style scoped>
.active {
  font-weight: 900;
  color: rgb(221 186 90);
  text-decoration: underline;
}

.logo {
  width: 300px;
  height: 80px;
  background-image: url('@/images/logo.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
