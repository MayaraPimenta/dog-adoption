<script setup lang="ts">
import { CheckCircleIcon, DevicePhoneMobileIcon, FingerPrintIcon, HeartIcon } from '@heroicons/vue/24/outline';
import HomeTitle from '@/modules/home/components/HomeTitle.vue';
import ButtonDefault from '@/shared/components/ButtonDefault.vue';
import StepCard from './StepCard.vue';

const cardContent = [
  {
    icon: DevicePhoneMobileIcon,
    text: 'Acesse a tela de adoção e veja os cachorros disponíveis nos abrigos',
    backgroundColor: 'primary',
  },
  {
    icon: FingerPrintIcon,
    text: 'Deslize para a direita para curtir ou para a esquerda para passar',
    backgroundColor: 'secondary-red',
  },
  {
    icon: HeartIcon,
    text: 'Ao curtir, o cachorro vai para sua lista de curtidos com os dados do abrigo',
    backgroundColor: 'secondary-green',
  },
  {
    icon: CheckCircleIcon,
    text: 'Entre em contato com o abrigo diretamente pelo WhatsApp e agende a visita',
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
      <router-link to="/adote">
        <ButtonDefault background-color="bg-primary">
          Comece aqui
        </ButtonDefault>
      </router-link>
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
