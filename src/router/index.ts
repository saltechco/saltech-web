import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: () => import('../views/ContactUs.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: () => import('../views/FAQ.vue')
    },
    {
      path: '/privacy',
      name: 'PrivacyPolicy',
      component: () => import('../views/PrivacyPolicy.vue')
    },
    {
      path: '/terms',
      name: 'TermsAndConditions',
      component: () => import('../views/TermsConditions.vue')
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/NotFound.vue'),
      name: 'NotFound'
    }
  ]
})

export default router
