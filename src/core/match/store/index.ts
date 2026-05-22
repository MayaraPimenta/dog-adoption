import type { Dog } from '@/types/dog';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMatchStore = defineStore('match', () => {
  const likedDogs = ref<Dog[]>([]);
  const currentMatch = ref<Dog | null>(null);

  function likeDog(dog: Dog) {
    likedDogs.value.push(dog);
    currentMatch.value = dog;
  }

  function clearMatch() {
    currentMatch.value = null;
  }

  return { likedDogs, currentMatch, likeDog, clearMatch };
});
