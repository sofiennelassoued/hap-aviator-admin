import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import NewView from '../views/new/index.vue'
import DetailsView from '../views/details/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/new',
      name: 'new',
      component: NewView,
    },
    {
      path: '/advertisements/:id',
      name: 'details',
      component: DetailsView,
    },
  ],
})

export default router
