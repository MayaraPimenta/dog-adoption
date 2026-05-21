<script setup lang="ts">
import LikedList from '@/modules/liked/components/LikedList.vue';
</script>

<template>
  <main class="flex flex-col items-center min-h-[calc(100vh-152px)] px-4 py-10 gap-8">
    <h1 class="font-serif text-3xl font-bold text-black-100 self-start max-size">
      Cachorros curtidos
    </h1>

    <section class="w-full max-size">
      <LikedList />
    </section>
  </main>
</template>
