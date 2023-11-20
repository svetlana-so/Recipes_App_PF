import type { ApiResponse, Recipe } from './data';

export default async function getRecipeById(id: number): Promise<Recipe> {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipe data.');
  }
  const data: ApiResponse = await response.json();

  if (data.meals && data.meals.length > 0) {
    return data.meals[0];
  } else {
    throw new Error('Recipe is not found');
  }
}
