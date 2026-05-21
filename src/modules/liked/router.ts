import type { RouteRecordRaw } from 'vue-router';
import LikedView from '@/modules/liked/views/Liked.vue';

export const likedRoutes: RouteRecordRaw[] = [
  {
    path: '/curtidos',
    name: 'Liked',
    component: LikedView,
    meta: { title: 'Curtidos' },
  },
];
