import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Information from '../views/Information.vue'
import Film from '../views/Film.vue'
import Films from '../views/Films.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/information',
    name: 'information',
    component: Information
  },
  {
    path: '/film/:id',
    name: 'film',
    component: Film
  },
  {
    path: '/films',
    name: 'films',
    component: Films
  },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    //DOESNT WORK :( TODO
    scrollBehavior(to) {
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
    }
})

export default router
