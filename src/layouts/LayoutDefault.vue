<script setup lang="ts">
import Footer from '@/layouts/components/Footer.vue';
import Header from '@/layouts/components/header/Header.vue';
</script>

<template>
  <Header />
  <main class="app bg-background-100 w-screen h-full font-montserrat">
    <slot />
  </main>
  <Footer />
</template>
