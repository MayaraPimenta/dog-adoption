import { createRouter, createWebHistory } from 'vue-router';
import { homeRoute } from '@/modules/home/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...homeRoute,
  ],
});

export default router;
