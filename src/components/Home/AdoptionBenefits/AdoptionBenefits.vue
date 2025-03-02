<script setup lang="ts">
import BenefitsCard from '@/components/Home/AdoptionBenefits/BenefitsCard.vue';

const benefits = [
  'Adotar dá um lar a animais resgatados, reduzindo a população de rua',
  'Incentiva o trabalho de ONGs e protetores que resgatam e cuidam de animais',
  'Animais adotados geralmente já vêm vacinados e castrados, reduzindo despesas iniciais',
  'Muitos animais adotados são gratos e desenvolvem laços profundos com seus tutores'
];
</script>

<template>
  <section class="bg-secondary-blue py-12 px-10 tablet:px-24">
    <h1 class="font-serif text-3xl tablet:text-5xl text-center font-semibold">
      Não compre, adote!
    </h1>
    <p class="text-center text-sm mt-4 mb-2.5">
      Adotar um animal em vez de comprar é um ato de amor que salva vidas e faz a diferença.
      Além de ajudar a reduzir o abandono, essa escolha apoia abrigos, pode ser mais econômica
      e proporciona um companheiro leal e único. Confira alguns dos principais benefícios da adoção:
    </p>

    <div class="flex items-stretch flex-col tablet:flex-row gap-8 my-8">
      <BenefitsCard
        v-for="(benefit, index) in benefits"
        :key="index"
        :content="benefit"
      />
    </div>
  </section>
</template>