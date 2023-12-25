import { setActivePinia, createPinia } from 'pinia';
import { useRecipeBook } from '@/stores/recipies';
import { describe, expect, it, beforeEach, vi, afterEach } from 'vitest';
import type { Recipe } from '@/stores/recipies';

const USER_NAME_KEY = 'user_name';
const COMMENTS = 'comments';
const FAVORITES_KEY = 'favorites_key';

describe('RecipeBook', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  const createSampleRecipe = (id: number): Recipe => {
    return {
      strMeal: `Sample Recipe ${id}`,
      idMeal: id,
      urlMeal: `https//.../${id}`,
      strMealThumb: 'info',
      strIngredient: 'flour',
      strMeasure: '30 g',
      strInstructions: 'Do like this',
      strArea: 'British',
      strCategory: 'Starter',
      strYoutube: `www.test.com/${id}`,
      strSource: `www.source.com/${id}`,
    };
  };

  it('should remove a recipe from favorites if it is already in favorites', () => {
    const RecipeStore = useRecipeBook();
    const sampleRecipe = createSampleRecipe(1);

    RecipeStore.recipes = [sampleRecipe];
    RecipeStore.favoritesRecipes = [sampleRecipe];
    expect(RecipeStore.favoritesRecipes.length).toBe(1);
    RecipeStore.toggleFavoriteRecipes(sampleRecipe.idMeal);
    expect(RecipeStore.favoritesRecipes.length).toBe(0);
  });

  it('should return true for a valid recipe ID', () => {
    const RecipeStore = useRecipeBook();
    const validRecipeId = 123;

    RecipeStore.recipes = [createSampleRecipe(123), createSampleRecipe(2)];

    const isRecipeValid = RecipeStore.isRecipeValid;
    const result = isRecipeValid(validRecipeId);

    expect(result).toBe(true);
  });

  it('should return false for an invalid recipe ID', () => {
    const RecipeStore = useRecipeBook();
    const invalidRecipeId = 789;

    RecipeStore.recipes = [createSampleRecipe(123), createSampleRecipe(2)];

    const isRecipeValid = RecipeStore.isRecipeValid;
    const result = isRecipeValid(invalidRecipeId);

    expect(result).toBe(false);
  });
});

describe('RecipeBook Service', () => {
  const getItemSpy = vi.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = vi.spyOn(Storage.prototype, 'setItem');
  const removeItemSpy = vi.spyOn(Storage.prototype, 'removeItem');

  afterEach(() => {
    localStorage.clear();
    getItemSpy.mockClear();
    setItemSpy.mockClear();
    removeItemSpy.mockClear();
  });

  describe('login', () => {
    it('logs in and sets user-related data in local storage', () => {
      const RecipeStore = useRecipeBook();

      RecipeStore.user_name = 'testuser';
      RecipeStore.handleSubmit();

      expect(setItemSpy).toHaveBeenCalledWith(USER_NAME_KEY, 'testuser');
      expect(RecipeStore.isLoggedIn).toBe(true);
    });
  });

  describe('logout', () => {
    it('logs out and removes user-related data from local storage', () => {
      const RecipeStore = useRecipeBook();

      localStorage.setItem(USER_NAME_KEY, 'testuser');
      localStorage.setItem(COMMENTS, 'sample comment');
      localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify([{ id: 1, name: 'recipe' }])
      );

      RecipeStore.logout();

      expect(removeItemSpy).toHaveBeenCalledWith(USER_NAME_KEY);
      expect(removeItemSpy).toHaveBeenCalledWith(COMMENTS);
      //fix this
      /* expect(removeItemSpy).toHaveBeenCalledWith(FAVORITES_KEY); */
      expect(RecipeStore.isLoggedIn).toBe(false);
    });
  });
});
