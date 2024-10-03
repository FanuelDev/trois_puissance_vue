import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/mainLayout.vue';
import Home from '@/views/home.vue';
import Primeur from '@/views/primeur.vue';
import Notes from '@/views/notes.vue';
import TopAfrique from '@/views/topAfrique.vue';
import Explore from '@/views/explore.vue';
import Degustation from '@/views/degustation.vue';
import Club from '@/views/club.vue';
import Boutique from '@/views/boutique.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: 'primeur',
          name: 'primeur',
          component: Primeur
        },
        {
          path: 'notes',
          name: 'notes',
          component: Notes
        },
        {
          path: 'topafrique',
          name: 'topafrique',
          component: TopAfrique
        },
        {
          path: 'explore',
          name: 'explore',
          component: Explore
        },
        {
          path: 'degustation',
          name: 'degustation',
          component: Degustation
        },
        {
          path: 'club',
          name: 'club',
          component: Club
        },
        {
          path: 'boutique',
          name: 'boutique',
          component: Boutique
        },
      ]
    }
  ]
})

export default router
