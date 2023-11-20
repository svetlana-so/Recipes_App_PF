import { ref, watch } from 'vue';
import { getTheRecipyByName } from '../stores/data';
import type { Recipe } from '../stores/data';

export const recipes = ref<Recipe[]>([]);
export const recipeName = ref<string>('');

watch(recipeName, async (newRecipeName, oldRecipeName) => {
  if (newRecipeName.trim() !== '' && newRecipeName !== oldRecipeName) {
    try {
      const response = await getTheRecipyByName(newRecipeName);
      recipes.value = response.meals || [];
    } catch (error) {
      console.error(error);
    }
  } else {
    recipes.value = [];
  }
});
