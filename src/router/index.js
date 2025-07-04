import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/DefaultLayout.vue'
const router = createRouter({
  linkActiveClass: 'after:w-full font-bold text-blue-800',
  linkExactActiveClass: 'border-indigo-700',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/components/NotFoundPage.vue'),
    },
  ],
})

export default router
