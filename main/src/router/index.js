import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../views/pages/MainPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/pages/LoginPage.vue'),
  },
  {
    path: '/community',
    name: 'community',
    component: () => import('../views/pages/CommunityPage.vue'),
  },
  {
    path: '/userList',
    name: 'userList',
    component: () => import('../views/utils/UserList.vue')
  },
  {
    path: '/chat',
    name: 'chatBoard',
    component: () => import('../views/utils/ChatBoard.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/utils/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
