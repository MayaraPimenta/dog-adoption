import type { RouteRecordRaw } from 'vue-router';
import MatchView from '@/modules/match/views/Match.vue';

export const matchRoutes: RouteRecordRaw[] = [
  {
    path: '/adote',
    name: 'Match',
    component: MatchView,
    meta: { title: 'Encontre seu cão' },
  },
];
