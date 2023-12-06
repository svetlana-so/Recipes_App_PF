<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRecipeBook } from '../stores/recipies';
import { useRouter } from 'vue-router';

const router = useRouter();
const RecipeStore = useRecipeBook();
const { user_name, isLoggedIn } = storeToRefs(RecipeStore);

const navigateToHomePage = () => {
  router.push(`/`);
};
</script>

<template>
  <section v-if="!isLoggedIn" class="image">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >First name</label
              >
              <input
                type="text"
                v-model="user_name"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter your name"
                required
              />
            </div>
            <button
              @click.prevent="RecipeStore.handleSubmit"
              type="submit"
              class="w-full text-black bg-primary-600 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <div class="flex justify-center">
    <div
      v-if="isLoggedIn"
      class="flex flex-col gap-6 justify-center items-center my-10"
    >
      <img
        class="w-32 h-32 object-cover object-bottom rounded-full"
        src="../images/avatar.jpg"
        alt=""
      />
      <h1>My Profile:</h1>
      <p>
        Name:
        <span data-testid="user-name-for-test" class="font-bold">{{
          user_name
        }}</span>
      </p>
      <button
        @click="navigateToHomePage"
        type="button"
        class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
      >
        Explore the recipes
      </button>
    </div>
  </div>
</template>
