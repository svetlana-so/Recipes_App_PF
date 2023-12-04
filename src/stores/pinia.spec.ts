import { setActivePinia, createPinia } from 'pinia';
import { useRecipeBook } from '@/stores/recipies';
import { describe, expect, it, beforeEach } from 'vitest';
import type { Recipe } from '@/stores/recipies';

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

  it('should load information from api', async () => {
    const RecipeStore = useRecipeBook();
    expect(RecipeStore.recipes).toEqual([]);
    expect(RecipeStore.isLoading).toBe(false);
  });

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
