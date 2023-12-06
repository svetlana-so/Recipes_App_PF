<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useRecipeBook } from '../stores/recipies';
import { devices } from '@playwright/test';
const RecipeStore = useRecipeBook();

const { user_name, isLoggedIn, comments, singleComment } =
  storeToRefs(RecipeStore);

const { recipeId } = defineProps(['recipeId']);

const addComment = () => {
  if (singleComment.value.trim() === '') {
    return;
  }

  const newComment = {
    recipeId: recipeId,
    recipeComment: singleComment.value,
  };

  comments.value.push(newComment);
  singleComment.value = '';
  localStorage.setItem('comments', JSON.stringify(comments.value));
};

const filteredComments = computed(() => {
  return comments.value.filter((comment) => comment.recipeId === recipeId);
});
</script>

<template>
  <section class="bg-whitepy-8 lg:py-16 antialiased">
    <div class="max-w-2xl mx-auto px-4">
      <div class="flex justify-between items-center mb-6">
        <h2
          v-if="isLoggedIn"
          class="text-lg lg:text-2xl font-bold text-gray-900 py-6"
        >
          Share your comments, {{ user_name }}:
        </h2>
        <h2
          v-if="!isLoggedIn"
          class="text-lg lg:text-2xl font-bold text-gray-900 py-6"
        >
          Share your comments:
        </h2>
      </div>
      <form @submit.prevent="addComment" class="mb-6">
        <div
          class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200"
        >
          <label for="comment" class="sr-only">Your comment</label>
          <textarea
            v-model="singleComment"
            @keyup.enter="addComment"
            id="comment"
            rows="6"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="focus:outline-none text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Post comment
        </button>
      </form>
    </div>
    <div class="max-w-2xl mx-auto px-4">
      <h3 class="text-lg lg:text-2xl font-bold text-gray-900 p-6">
        Comments ({{ filteredComments.length }}):
      </h3>
      <article
        v-for="(comment, index) in filteredComments"
        :key="index"
        class="p-6 text-base bg-white rounded-lg border border-grey mb-4"
      >
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <ul class="text-gray-500">
              <p
                class="inline-flex items-center mr-3 text-sm text-gray-900 font-semibold"
              >
                {{ user_name }}
              </p>
              <p data-testid="comment" class="text-gray-700">
                {{ comment.recipeComment }}
              </p>
            </ul>
          </div>
        </footer>

        <div class="flex items-center mt-4 space-x-4"></div>
      </article>
    </div>
  </section>
</template>
