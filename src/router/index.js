import { createRouter, createWebHistory } from '@ionic/vue-router'
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/dashboard'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('../views/DashboardPage.vue')
      },
      {
        path: 'alerts',
        component: () => import('../views/AlertsPage.vue')
      },
      {
        path: 'buddy-builds',
        component: () => import('../views/BuddyBuildsPage.vue')
      },
      {
        path: 'business',
        component: () => import('../views/BusinessPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router