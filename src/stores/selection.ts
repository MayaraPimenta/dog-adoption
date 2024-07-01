import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useSelectionStore = defineStore('selection', () => {
  //state
  const characteristicsList = ref<string[]>([]);

  //getters
  // const doubleCount = computed(() => count.value * 2);

  //actions
  function setCharacteristics(characteristics: string[]) {
    characteristicsList.value = characteristics

    console.log('store:', characteristicsList.value);
  }

  return { characteristicsList, setCharacteristics };
});
