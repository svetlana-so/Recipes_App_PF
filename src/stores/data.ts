export interface ApiResponse {
  meals?: Recipe[];
}
export interface Recipe {
  idMeal: string;
  strInstructions: string;
}
export async function getTheRecipyByName(recipeName: string): Promise<ApiResponse> {
  const responce = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName.trim()}`
  );
  if (!responce.ok) {
    throw new Error('Failed to fetch recipe data. Please try again later.');
  }
  return responce.json();
}
