<script setup lang="ts">
import HomeTitle from '@/components/Home/HomeTitle.vue';
import ButtonDefault from '@/components/shared/ButtonDefault.vue';
import StepCard from './StepCard.vue';
import { CursorArrowRaysIcon, HeartIcon, CheckCircleIcon, ClipboardDocumentIcon } from '@heroicons/vue/24/outline';

const cardContent = [
  {
    icon: CursorArrowRaysIcon,
    text: 'Selecione as características que deseja em seu novo amigo',
    backgroundColor: 'primary'
  },
  {
    icon: ClipboardDocumentIcon,
    text: 'Receba sugestões próximas que combinam com você',
    backgroundColor: 'secondary-red'
  },
  {
    icon: HeartIcon,
    text: 'Selecione o perfil desejado',
    backgroundColor: 'secondary-blue'
  },
  {
    icon: CheckCircleIcon,
    text: 'E pronto! Agora é só aguardar o contato do abrigo',
    backgroundColor: 'secondary-green'
  }
];
</script>

<template>
  <section class="flex gap-8 mx-24 py-12">
    <div class="max-w-[400px]">
      <HomeTitle align="start">Encontre facilmente o pet ideal para você.</HomeTitle>
      <p class="my-6"> Com filtros intuitivos e perfis detalhados, ajudamos você a encontrar seu novo amigo</p>
      <ButtonDefault backgroundColor="primary">Comece aqui</ButtonDefault>
    </div>

    <div class="w-full flex flex-col gap-4">
      <StepCard
        v-for="(card, index) in cardContent"
        :key="index"
        :icon="card.icon"
        :text="card.text"
        :backgroundColor="card.backgroundColor"
      />
    </div>
  </section>
</template>