import type { RouteRecordRaw } from 'vue-router';
import HomeView from '@/modules/home/views/Home.vue';

export const homeRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Início',
    },
  },
];
