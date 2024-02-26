import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Layout
import MainLayout from '../layout/MainLayout.vue'
import AuthLayout from '../layout/AuthLayout.vue'

// Pages
import MainPage from '../pages/MainPage.vue'
import DetailAnime from '../pages/DetailAnime.vue'
import WatchPage from '../pages/WatchAnime.vue'
import SchedulePage from '../pages/ScheduleAnime.vue'

import LoginForm from '../components/auth/LoginForm.vue'
import RegisterForm from '../components/auth/RegisterForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [
        {
          path: '/',
          name: 'mainPage',
          component: MainPage
        },
        {
          path: '/schedule',
          name: 'schedulePage',
          component: SchedulePage
        },
        {
          path: '/anime/:slug',
          name: 'detailAnime',
          component: DetailAnime
        },
        {
          path: '/anime/:slug/episode/:episode_name',
          name: 'watchAnime',
          component: WatchPage
        },
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthLayout,
      children: [
        {
          path: 'signin',
          name: 'loginForm',
          component: LoginForm
        },
        {
          path: 'signup',
          name: 'registerForm',
          component: RegisterForm
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
