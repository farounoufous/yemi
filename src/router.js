import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

// "/projets/:id" affiche la même page avec la fenêtre de détails ouverte (lien partageable)
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/projets/:id', name: 'project', component: Home },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ],
  scrollBehavior(to, from, saved) {
    if (to.hash) return { el: to.hash, top: 80, behavior: 'smooth' }
    if (to.name === 'project' || from.name === 'project') return false
    return saved || { top: 0 }
  }
})
