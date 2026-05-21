<script setup lang="ts">
import type { Dog } from '@/types/dog';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMatchStore } from '@/core/match/store';
import MatchScreen from '@/modules/match/components/MatchScreen.vue';
import DogCard from '@/shared/components/DogCard/DogCard.vue';

const router = useRouter();
const matchStore = useMatchStore();

const mockDogs: Dog[] = [
  { id: '1', name: 'Rex', breed: 'Labrador', age: 3, imageUrl: 'https://placedog.net/400/400?id=1', shelter: { name: 'Abrigo Central', address: 'Av. Paulista, 100 — São Paulo/SP', phone: '(11) 3000-0001' } },
  { id: '2', name: 'Mel', breed: 'Golden Retriever', age: 2, imageUrl: 'https://placedog.net/400/400?id=2', shelter: { name: 'Lar dos Bichos', address: 'Rua das Flores, 45 — Campinas/SP', phone: '(19) 3000-0002' } },
  { id: '3', name: 'Thor', breed: 'Husky Siberiano', age: 4, imageUrl: 'https://placedog.net/400/400?id=3', shelter: { name: 'Adote Já', address: 'Rua Verde, 200 — Curitiba/PR', phone: '(41) 3000-0003' } },
  { id: '4', name: 'Luna', breed: 'Beagle', age: 1, imageUrl: 'https://placedog.net/400/400?id=4', shelter: { name: 'Abrigo Central', address: 'Av. Paulista, 100 — São Paulo/SP', phone: '(11) 3000-0001' } },
  { id: '5', name: 'Bolinha', breed: 'Vira-lata', age: 5, imageUrl: 'https://placedog.net/400/400?id=5', shelter: { name: 'Lar dos Bichos', address: 'Rua das Flores, 45 — Campinas/SP', phone: '(19) 3000-0002' } },
];

const deck = ref<Dog[]>([...mockDogs]);

function onSwipeRight(dogId: string) {
  const dog = deck.value.find(d => d.id === dogId);
  if (dog)
    matchStore.likeDog(dog);
  removeFromDeck(dogId);
}

function onSwipeLeft(dogId: string) {
  removeFromDeck(dogId);
}

function removeFromDeck(dogId: string) {
  deck.value = deck.value.filter(d => d.id !== dogId);
}

function onMatchClose() {
  matchStore.clearMatch();
}

function onViewLiked() {
  matchStore.clearMatch();
  router.push({ name: 'Liked' });
}
</script>

<template>
  <main class="flex flex-col items-center justify-center min-h-[calc(100vh-152px)] gap-8 px-4">
    <h1 class="font-serif text-3xl font-bold text-black-100">
      Encontre seu cão
    </h1>

    <div class="relative w-full max-w-sm h-130">
      <template v-if="deck.length > 0">
        <DogCard
          v-for="(dog, i) in deck.slice(0, 3)"
          :key="dog.id"
          :dog="dog"
          :index="i"
          @swipe-right="onSwipeRight"
          @swipe-left="onSwipeLeft"
        />
      </template>

      <div
        v-else
        class="flex flex-col items-center justify-center h-full gap-4 text-black-100/50"
      >
        <p class="text-lg font-serif">
          Sem mais cães por enquanto
        </p>
        <p class="text-sm">
          Volte mais tarde!
        </p>
      </div>
    </div>

    <div class="flex gap-6 text-sm text-black-100/60">
      <span>← passar</span>
      <span>curtir →</span>
    </div>

    <MatchScreen
      v-if="matchStore.currentMatch"
      :dog="matchStore.currentMatch"
      @close="onMatchClose"
      @view-liked="onViewLiked"
    />
  </main>
</template>
