import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/NotFound.vue'),
      name: 'NotFound'
    }
  ]
})

export default router
