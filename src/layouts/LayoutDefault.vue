<template>
  <Header />
  <main class="app bg-background-100 w-screen h-full font-montserrat">
    <slot />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '@/layouts/components/header/Header.vue';
import Footer from '@/layouts/components/Footer.vue';
</script>
