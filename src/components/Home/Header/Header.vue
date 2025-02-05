<template>
  <header class="flex items-center justify-between gap-12 mx-10 tablet:mx-12">
    <a href="#home" class="hover-scale">
      <img class="w-12" src="@/assets/logo.svg" alt="Logo">
    </a>

    <section v-if="isMobile">
      <div
        class="p-2 bg-secondary-red rounded-full"
        @click="openMobileMenu"
      >
        <Bars3Icon class="w-6"/>
      </div>

      <MobileMenu
        v-if="isMenuOpen"
        :options="navOptions"
        @close-menu="closeMobileMenu"
      />
    </section>

    <section v-else class="flex w-full justify-between">
      <nav class="flex items-center gap-8">
        <a
          v-for="(option, index) in navOptions"
          :key="index"
          class="hover:text-secondary-red cursor-pointer transition"
        >
          {{ option }}
        </a>
      </nav>

      <ButtonDefault
        v-if="!isMobile"
        background-color="secondary-red"
        width="24"
      >
        Login
      </ButtonDefault>
    </section>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonDefault from '../../shared/ButtonDefault.vue';
import { Bars3Icon } from '@heroicons/vue/20/solid';
import { useMediaQuery } from '@vueuse/core';
import MobileMenu from './MobileMenu.vue';

const navOptions = ref(['Home', 'Adote', 'Sobre', 'Contato']);
const isMobile = useMediaQuery('(max-width: 768px)');
const isMenuOpen = ref(false);

const openMobileMenu = () => {
  isMenuOpen.value = true;
};

const closeMobileMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>

</style>