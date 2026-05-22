<script setup lang="ts">
import type { Dog } from '@/types/dog';

defineProps<{ dog: Dog }>();

const emit = defineEmits<{
  close: [];
  viewLiked: [];
}>();
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm
           animate-fade-in"
  >
    <article
      class="relative flex flex-col items-center gap-6 bg-background-100 rounded-2xl
             border border-black-100 shadow-card p-8 mx-6 max-w-sm w-full
             animate-slide-up"
    >
      <p class="text-xl font-bold font-serif text-primary uppercase tracking-widest">
        É um Match!
      </p>

      <img
        :src="dog.imageUrl"
        :alt="dog.name"
        class="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-default"
      >

      <div class="text-center">
        <h2 class="text-2xl font-bold font-serif text-black-100">
          {{ dog.name }}
        </h2>
        <p class="text-sm text-black-100/70 mt-1">
          {{ dog.breed }}
        </p>
      </div>

      <div class="flex flex-col gap-3 w-full">
        <button
          data-testid="btn-view-liked"
          class="hover-scale w-full border border-black-100 rounded-lg shadow-default px-6 py-2
                 text-sm cursor-pointer bg-primary text-black-100"
          @click="emit('viewLiked')"
        >
          Ver curtidos
        </button>

        <button
          data-testid="btn-continue"
          class="hover-scale w-full border border-black-100 rounded-lg shadow-default px-6 py-2
                 text-sm cursor-pointer bg-background-100 text-black-100"
          @click="emit('close')"
        >
          Continuar
        </button>
      </div>
    </article>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from { opacity: 0 }
  to   { opacity: 1 }
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(32px) }
  to   { opacity: 1; transform: translateY(0) }
}
.animate-fade-in  { animation: fade-in  0.25s ease both }
.animate-slide-up { animation: slide-up 0.3s ease both }
</style>
