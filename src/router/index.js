import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Information from '../views/Information.vue'
import Film from '../views/Film.vue'
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
    path: '/film/:id',
    name: 'Film',
    component: Film
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
