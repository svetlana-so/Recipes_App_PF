import { setActivePinia, createPinia } from 'pinia';
import { useRecipeBook } from '@/stores/recipies';
import { describe, expect, it, beforeEach } from 'vitest';

describe('RecipeBook', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it('should load information from api', async () => {
    const RecipeStore = useRecipeBook();
    expect(RecipeStore.recipes).toEqual([]);
    if (typeof RecipeStore.isLoading === 'boolean') {
      expect(RecipeStore.isLoading).toBe(false);
    } else {
      expect(RecipeStore.isLoading).toBe(true);
    }
  });

  it('should remove a recipe from favorites if it is already in favorites', () => {
    const RecipeStore = useRecipeBook();
    const sampleRecipe = { idMeal: 1, strMeal: 'Sample Recipe' };

    // Add the recipe to favorites initially
    RecipeStore.recipes = [sampleRecipe];
    RecipeStore.favoritesRecipes = [sampleRecipe];

    // Ensure the recipe is in favorites
    expect(RecipeStore.favoritesRecipes.length).toBe(1);

    // Remove the recipe from favorites
    RecipeStore.toggleFavoriteRecipes(sampleRecipe.idMeal);

    // Assert that the recipe is no longer in favorites
    expect(RecipeStore.favoritesRecipes.length).toBe(0);
  });
  /* 
  it('should not modify favorites if recipeToAdd is undefined', () => {
    const RecipeStore = useRecipeBook();

    // Ensure favoritesRecipes is empty initially
    expect(RecipeStore.favoritesRecipes).toEqual([]);

    // Call toggleFavoriteRecipes with an undefined recipeToAdd
    RecipeStore.toggleFavoriteRecipes(1);

    // Assert that favoritesRecipes is still empty
    expect(RecipeStore.favoritesRecipes).toEqual([]);
  }); */
});
