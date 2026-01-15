<template>
  <header class="bg-background-100 w-full pt-4 pb-6">
    <main class="max-size flex items-center justify-between md:justify-center  gap-12">
      <a
        href="#home"
        class="hover-scale"
      >
        <img
          class="w-12"
          :src="logo"
          alt="Logo"
        >
      </a>

      <section v-if="isMobile">
        <div
          class="p-2 bg-secondary-red rounded-full"
          @click="openMobileMenu"
        >
          <Bars3Icon class="w-6" />
        </div>

        <MobileMenu
          v-if="isMenuOpen"
          :options="mobileMenuOptions"
          @close-menu="closeMobileMenu"
        />
      </section>

      <section
        v-else
        class="w-full flex justify-between"
      >
        <nav class="flex items-center gap-8">
          <router-link
            v-for="(option, index) in navOptions"
            :key="index"
            :to="option.url"
            class="hover:text-primary cursor-pointer transition"
          >
            {{ option.name }}
          </router-link>
        </nav>

        <ButtonDefault
          v-if="!isMobile"
          background-color="secondary-red"
          width="24"
        >
          Login
        </ButtonDefault>
      </section>
    </main>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ButtonDefault from '@/shared/components/ButtonDefault.vue';
import { Bars3Icon } from '@heroicons/vue/20/solid';
import { useMediaQuery } from '@vueuse/core';
import MobileMenu from '@/layouts/components/header/MobileMenu.vue';
import logo from '@/shared/assets/logo.svg';

const navOptions = [
  { name: 'Home', url: '' },
  { name: 'Sobre', url: '' },
  { name: 'Adote', url: '' },
  { name: 'Contato', url: '' }
];
const isMobile = useMediaQuery('(max-width: 768px)');
const isMenuOpen = ref(false);

const mobileMenuOptions = computed(() => {
  const option = { name: 'Login', url: '' };

  return [option, ...navOptions];
});

const openMobileMenu = () => {
  isMenuOpen.value = true;
};

const closeMobileMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>

</style>