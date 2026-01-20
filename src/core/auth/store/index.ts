import type { LoginResponse } from '@/core/auth/types';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { AuthService } from '@/core/auth/services';
import { useUserStore } from '@/core/user/store';

export const useAuthStore = defineStore('auth', () => {
  // Estado
  const token = ref<string | null>(localStorage.getItem('token'));
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Stores
  const userStore = useUserStore();

  // Getters
  const isAuthenticated = computed(() => !!token.value);

  // Instância do Serviço (pode ser injetada se preferir)
  const authService = new AuthService();

  // Actions
  async function login(credentials: { email: string; password: string }) {
    loading.value = true;
    error.value = null;
    try {
      const response = await authService.login(credentials);

      // Ajustar conforme o retorno real da API
      const { token: newToken, user: newUser } = response.data as LoginResponse;

      setToken(newToken);
      userStore.setUser(newUser);
    }
    catch (err: any) {
      error.value = err.response?.data?.message || 'Erro ao realizar login';
      throw err;
    }
    finally {
      loading.value = false;
    }
  }

  async function register(credentials: { email: string; password: string }) {
    loading.value = true;
    error.value = null;
    try {
      await authService.register(credentials);
      // Opcional: Já logar o usuário após registro ou redirecionar para login
    }
    catch (err: any) {
      error.value = err.response?.data?.message || 'Erro ao criar conta';
      throw err;
    }
    finally {
      loading.value = false;
    }
  }

  async function logout() {
    try {
      // Tenta chamar o endpoint de logout, mas limpa o estado independente de erro
      await authService.logout();
    }
    catch (err) {
      console.error('Erro no logout remoto', err);
    }
    finally {
      clearAuth();
    }
  }

  // Helpers internos
  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem('token', newToken);
  }

  function clearAuth() {
    token.value = null;
    userStore.clearUser();
    localStorage.removeItem('token');
  }

  return {
    token,
    loading,
    error,
    isAuthenticated,
    login,
    register,
    logout,
  };
});
