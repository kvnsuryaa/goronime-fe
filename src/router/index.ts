import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Layout
import MainLayout from '../layout/MainLayout.vue'
import AuthLayout from '../layout/AuthLayout.vue'
import DashboardLayout from '../layout/DashboardLayout.vue'

// Pages
import MainPage from '../pages/MainPage.vue'
import DetailAnime from '../pages/DetailAnime.vue'
import WatchPage from '../pages/WatchAnime.vue'
import SchedulePage from '../pages/ScheduleAnime.vue'
import AnimeList from '../pages/AnimeList.vue'

// Dashboard Page
import MasteDataDashboardPage from '../pages/dashboard/MasterDataPage.vue'
import SummaryDashboardPage from '../pages/dashboard/SummaryPage.vue'
import AnimeDashboardPage from '../pages/dashboard/AnimePage.vue'
import GenreDashboardPage from '../pages/dashboard/GenrePage.vue'
import CategoryDashboardPage from '../pages/dashboard/CategoryPage.vue'
import StudioDashboardPage from '../pages/dashboard/StudioPage.vue'
import ScheduleDashboardPage from '../pages/dashboard/SchedulePage.vue'
import AccountDashboardPage from '../pages/dashboard/AccountPage.vue'

// Forms
import AnimeForm from '../components/form/animeForm.vue'
import LoginForm from '../components/auth/LoginForm.vue'
import RegisterForm from '../components/auth/RegisterForm.vue'
import { useAuthStore } from '@/stores/auth'

// validation router for admin
const isAdmin = (to: any, from: any, next: any) => {
  const authStore = useAuthStore()
  const user = authStore.user
  if (!user) {
    return next('/auth')
  } else {
    return next()
  }
}

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
          path: '/anime-list',
          name: 'animeList',
          component: AnimeList
        },
        {
          path: '/anime/:slug/episode/:episode_name',
          name: 'watchAnime',
          component: WatchPage
        },
        {
          path: '/form/anime',
          name: 'animeform',
          component: AnimeForm
        }
      ]
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardLayout,
      redirect: '/dashboard/summary',
      beforeEnter: isAdmin,
      children: [
        {
          path: 'summary',
          name: 'summary',
          component: SummaryDashboardPage
        },
        {
          path: 'anime',
          name: 'anime',
          component: AnimeDashboardPage
        },
        {
          path: 'schedule',
          name: 'schedule',
          component: ScheduleDashboardPage
        },
        {
          path: 'accounts',
          name: 'accounts',
          component: AccountDashboardPage
        },
        {
          path: 'master',
          name: 'master',
          component: MasteDataDashboardPage,
          redirect: '/dashboard/master/genre',
          children: [
            {
              path: 'genre',
              name: 'genre',
              component: GenreDashboardPage
            },
            {
              path: 'category',
              name: 'category',
              component: CategoryDashboardPage
            },
            {
              path: 'studio',
              name: 'studio',
              component: StudioDashboardPage
            },
          ]
        }
      ]
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthLayout,
      redirect: '/auth/signin',
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
