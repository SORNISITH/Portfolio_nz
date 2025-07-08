import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/DefaultLayout.vue'
const router = createRouter({
  linkActiveClass: '',
  linkExactActiveClass: 'after:w-full font-bold text-blue-800 border-indigo-700',
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
          path: '/about_me',
          name: 'about',
          component: () => import('../views/AboutView.vue'),
        },
        {
          path: '/github',
          name: 'github',
          component: () => import('../views/GithubView.vue'),
        },
        {
          path: '/my_library',
          name: 'my_library',
          component: () => import('../views/MyLib.vue'),
        },

        {
          path: '/contact',
          name: 'contact',
          component: () => import('../views/ContactUsView.vue'),
        },
        {
          path: '/projects',
          name: 'projects',
          component: () => import('../views/ProjectView.vue'),
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
