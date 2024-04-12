import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('../views/OtherView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/NoFoundView.vue')
    },
    {
      path: '/fun',
      name: 'fun',
      component: () => import('../views/FunView.vue')
    },

    //                         social

    {
      path: '/boosty',
      name: 'boosty',
      beforeEnter() {location.href = 'https://boosty.to/grechkagk'}
    }
  ]
})

export default router
