
import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import Contact from './components/Contact.vue'
import Work from './components/Work.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/contact', component: Contact },
  { path: '/work', component: Work },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;