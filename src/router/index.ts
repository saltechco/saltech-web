import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: 'صالتک • SalTech'
      }
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: () => import('../views/ContactUs.vue'),
      meta: {
        title: 'صالتک • ارتباط با ما'
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactUs.vue'),
      meta: {
        title: 'صالتک • ارتباط با ما'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
      meta: {
        title: 'صالتک • درباره ما'
      }
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: () => import('../views/FAQ.vue'),
      meta: {
        title: 'صالتک • سؤالات متداول'
      }
    },
    {
      path: '/privacy',
      name: 'PrivacyPolicy',
      component: () => import('../views/PrivacyPolicy.vue'),
      meta: {
        title: 'صالتک • حریم خصوصی'
      }
    },
    {
      path: '/terms',
      name: 'TermsAndConditions',
      component: () => import('../views/TermsConditions.vue'),
      meta: {
        title: 'صالتک • قوانین و مقررات'
      }
    },
    {
      path: '/apps/:appName',
      component: () => import('../views/Apps.vue'),
      meta: {
        title: 'صالتک • معرفی برنامه'
      }
    },
    {
      path: '/:catchAll(.*)',
      component: () => import('../views/NotFound.vue'),
      name: 'NotFound',
      meta: {
        title: 'صالتک • صفحه پیدا نشد'
      }
    }
  ]
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.beforeEach((to, from) => {
  document.title = to.meta?.title ?? 'نامشخص'
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
