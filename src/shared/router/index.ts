import { createRouter, createWebHistory } from 'vue-router';
import { authRoutes } from '@/modules/auth/router';
import { homeRoute } from '@/modules/home/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...homeRoute,
    ...authRoutes,
  ],
});

router.beforeEach((to) => {
  const title = to.meta.title as string;
  if (title) {
    document.title = `${title} | Dog Adoption`;
  }
});

export default router;
