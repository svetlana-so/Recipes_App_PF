// useRecipeBook.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

type Recipe = {
  strMeal: string
  idMeal: number
  urlMeal: string
  strMealThumb: string
  strIngredient: string
  strMeasure: string
  strInstructions: string
}

export const useRecipeBook = defineStore('RecipeBook', () => {
  const recipes = ref<Recipe[]>([])
  const searchquery = ref<string>('')
  const favoritesRecipes = ref<Recipe[]>([])
  const isLoading = ref<boolean>(false)
  const singleRecipe = ref<Recipe | null>(null)
  const numberOfRecipes = computed(() => (recipes.value ? recipes.value.length : 0))

  const filteredIngredients = computed(() => {
    if (singleRecipe.value === null) return []

    return Array.from({ length: 20 })
      .map((_, i) => ({
        name: (singleRecipe.value! as any)[`strIngredient${i}`]?.trim() || '',
        measure: (singleRecipe.value! as any)[`strMeasure${i}`]?.trim() || ''
      }))
      .filter((ingredient) => ingredient.name.trim() !== '' || ingredient.measure.trim() !== '')
  })

  async function getData(searchquery: string): Promise<void> {
    try {
      isLoading.value = true
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchquery}`
      )
      const data = await response.json()
      recipes.value = data.meals || []
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }
  async function getSingleRecipe(id: number): Promise<void> {
    try {
      isLoading.value = true
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await response.json()
      singleRecipe.value = data.meals ? data.meals[0] : null
    } catch (error) {
      console.error(error)
    } finally {
      isLoading.value = false
    }
  }
  function ToggleFavoriteRecipes(id: number): void {
    const recipeToAdd = recipes.value?.find((recipe) => recipe.idMeal === id)

    if (recipeToAdd) {
      const isRecipeInFavorites = favoritesRecipes.value.some((recipe) => recipe.idMeal === id)

      if (!isRecipeInFavorites) {
        favoritesRecipes.value.push(recipeToAdd)
      } else {
        // Recipe is already in favorites, remove it
        favoritesRecipes.value = favoritesRecipes.value.filter((recipe) => recipe.idMeal !== id)
      }
    }
  }
  return {
    recipes,
    searchquery,
    favoritesRecipes,
    isLoading,
    singleRecipe,
    numberOfRecipes,
    filteredIngredients,
    ToggleFavoriteRecipes,
    getSingleRecipe,
    getData
  }
})
