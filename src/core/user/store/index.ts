import type { IUser } from '@/core/auth/types'; // Podemos mover User para um shared types depois se necessário
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const currentUser = ref<IUser | null>(null);

  function setUser(user: IUser) {
    currentUser.value = user;
  }

  function getUser(): IUser | null {
    return currentUser.value;
  }

  function clearUser() {
    currentUser.value = null;
  }

  return {
    currentUser,
    setUser,
    getUser,
    clearUser,
  };
});
