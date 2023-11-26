import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoriteRecipes.vue')
    },
    {
      path: '/recipe/:id',
      name: 'RecipePage',
      component: () => import('../views/RecipePageView.vue')
    }
  ]
})

export default router
