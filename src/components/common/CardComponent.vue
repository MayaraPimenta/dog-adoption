<template>
  <div
    ref="cardItem"
    class="card relative flex flex-col bg-white-100 p-4 sm:rounded-lg font-sans
    w-screen sm:w-auto h-screen sm:h-3/5"
  >
    <KeepAlive>
      <component
        :is="steps[currentStep]"
        @next-step="nextStep">
      </component>
    </KeepAlive>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-unused-vars
import SelectionCard from '@/components/cards/SelectionCard.vue';
import { ref } from 'vue';
import DataCard from '@/components/cards/DataCard.vue';
import type { Component } from 'vue';

interface IComponents {
  [key: string]: Component;
}
const currentStep = ref('SelectionCard');
const steps = ref<IComponents>({
  SelectionCard,
  DataCard
});

const nextStep = (stepName: string) => {
  currentStep.value = stepName;
};
</script>

