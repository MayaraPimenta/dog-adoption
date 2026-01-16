<script setup lang="ts">
import { CheckCircleIcon, ClipboardDocumentIcon, CursorArrowRaysIcon, HeartIcon } from '@heroicons/vue/24/outline';
import HomeTitle from '@/modules/home/components/HomeTitle.vue';
import ButtonDefault from '@/shared/components/ButtonDefault.vue';
import StepCard from './StepCard.vue';

const cardContent = [
  {
    icon: CursorArrowRaysIcon,
    text: 'Selecione as características que deseja em seu novo amigo',
    backgroundColor: 'primary',
  },
  {
    icon: ClipboardDocumentIcon,
    text: 'Receba sugestões próximas que combinam com você',
    backgroundColor: 'secondary-red',
  },
  {
    icon: HeartIcon,
    text: 'Selecione o perfil desejado',
    backgroundColor: 'secondary-green',
  },
  {
    icon: CheckCircleIcon,
    text: 'E pronto! Agora é só aguardar o contato do abrigo',
    backgroundColor: 'secondary-blue',
  },
];
</script>

<template>
  <section class="flex flex-col tablet:flex-row gap-8 max-size py-12">
    <div class="max-w-[400px]">
      <HomeTitle align="start">
        Encontre facilmente o pet ideal para você.
      </HomeTitle>
      <p class="my-6">
        Com filtros intuitivos e perfis detalhados, ajudamos você a encontrar seu novo amigo
      </p>
      <ButtonDefault background-color="primary">
        Comece aqui
      </ButtonDefault>
    </div>

    <div class="w-full flex flex-col gap-4">
      <StepCard
        v-for="(card, index) in cardContent"
        :key="index"
        :icon="card.icon"
        :text="card.text"
        :background-color="card.backgroundColor"
      />
    </div>
  </section>
</template>
