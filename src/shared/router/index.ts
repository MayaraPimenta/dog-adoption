import { createRouter, createWebHistory } from 'vue-router';
import { authRoutes } from '@/modules/auth/router';
import { homeRoute } from '@/modules/home/router';
import { likedRoutes } from '@/modules/liked/router';
import { matchRoutes } from '@/modules/match/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...homeRoute,
    ...authRoutes,
    ...matchRoutes,
    ...likedRoutes,
  ],
});

router.beforeEach((to) => {
  const title = to.meta.title as string;
  if (title) {
    document.title = `${title} | Dog Adoption`;
  }
});

export default router;
