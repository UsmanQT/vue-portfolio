import { createRouter, createWebHistory } from 'vue-router'
import Header from '../components/Header.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
  ]
})

export default router
