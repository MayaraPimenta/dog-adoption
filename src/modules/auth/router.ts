import type { RouteRecordRaw } from 'vue-router';
import LoginView from '@/modules/auth/views/Login.vue';
import RegisterView from '@/modules/auth/views/Register.vue';

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
    meta: {
      title: 'Register',
    },
  },
];
