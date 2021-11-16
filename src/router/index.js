import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Information from '../views/Information.vue'
import Description from '../views/Description.vue'
import Films from '../views/Films.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
  },
  {
    path: '/information',
    name: 'Information',
    component: Information
  },
  {
    path: '/description/:id',
    name: 'Description',
    component: Description
  },
  {
    path: '/films',
    name: 'Films',
    component: Films
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
