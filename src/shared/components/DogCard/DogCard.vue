<script setup lang="ts">
import type { Dog } from '@/types/dog';
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<{
  dog: Dog;
  index?: number;
}>(), {
  index: 0,
});

const emit = defineEmits<{
  swipeRight: [dogId: string];
  swipeLeft: [dogId: string];
}>();

const SWIPE_THRESHOLD = 80;

type CardState = 'idle' | 'dragging' | 'dismissed';

const state = ref<CardState>('idle');
const startX = ref(0);
const deltaX = ref(0);

const cardStyle = computed(() => ({
  transform: `translateX(${deltaX.value}px) rotate(${deltaX.value * 0.05}deg)`,
  transition: state.value === 'dragging' ? 'none' : 'transform 0.35s ease',
  zIndex: 10 - props.index,
}));

const overlayStyle = computed(() => {
  if (state.value !== 'dragging' || Math.abs(deltaX.value) <= 20)
    return null;
  const opacity = Math.min(Math.abs(deltaX.value) / SWIPE_THRESHOLD, 1) * 0.6;
  const color = deltaX.value > 0
    ? 'var(--color-secondary-green)'
    : 'var(--color-secondary-red)';
  return { backgroundColor: color, opacity };
});

function onPointerDown(e: PointerEvent) {
  state.value = 'dragging';
  startX.value = e.clientX;
  deltaX.value = 0
  ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
}

function onPointerMove(e: PointerEvent) {
  if (state.value !== 'dragging')
    return;
  deltaX.value = e.clientX - startX.value;
}

function onPointerUp() {
  if (state.value !== 'dragging')
    return;

  if (deltaX.value > SWIPE_THRESHOLD) {
    state.value = 'dismissed';
    deltaX.value = window.innerWidth;
    emit('swipeRight', props.dog.id);
  }
  else if (deltaX.value < -SWIPE_THRESHOLD) {
    state.value = 'dismissed';
    deltaX.value = -window.innerWidth;
    emit('swipeLeft', props.dog.id);
  }
  else {
    state.value = 'idle';
    deltaX.value = 0;
  }
}
</script>

<template>
  <article
    data-testid="dog-card"
    :style="cardStyle"
    class="absolute w-full max-w-sm cursor-grab active:cursor-grabbing select-none touch-none
           rounded-2xl border border-black-100 shadow-card bg-background-100 overflow-hidden"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerUp"
  >
    <img
      :src="dog.imageUrl"
      :alt="dog.name"
      class="w-full h-72 object-cover"
      draggable="false"
    >

    <div class="p-4 flex flex-col gap-1">
      <h2 class="font-serif text-2xl font-bold text-black-100">
        {{ dog.name }}
      </h2>
      <p class="text-sm text-black-100/70">
        {{ dog.breed }} · {{ dog.age }} ano{{ dog.age !== 1 ? 's' : '' }}
      </p>
      <p v-if="dog.description" class="mt-2 text-sm text-black-100/80">
        {{ dog.description }}
      </p>
      <p class="mt-1 text-xs text-black-100/50">
        {{ dog.shelter.name }}
      </p>
    </div>

    <div
      v-if="overlayStyle"
      :style="overlayStyle"
      class="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <span
        v-if="deltaX > 20"
        class="text-5xl font-bold text-black-100 rotate-[-15deg]"
      >CURTIR</span>
      <span
        v-else
        class="text-5xl font-bold text-black-100 rotate-[15deg]"
      >AGORA NÃO</span>
    </div>
  </article>
</template>
