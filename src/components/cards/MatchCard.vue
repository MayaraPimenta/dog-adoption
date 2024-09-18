<template>
  <div
    class="match absolute z-40 top-0 left-0 backdrop-blur-md w-full h-full px-6 py-8
    flex flex-col justify-between items-center bg-black/50 text-white rounded-lg"
  >
    <img
      src="../assets/svg/match.svg"
      alt="Its a match"
      class="h-auto w-52"
    >

    <main>
      <p>
        Você e dog combinam!
      </p>

      <section class="flex items-center justify-center gap-x-3 mt-6">
        <div class="rounded-full bg-slate-200 w-16 h-16" />
        <div class="rounded-full bg-slate-200 w-16 h-16" />
      </section>
    </main>

    <footer class="w-full flex flex-col items-center justify-center gap-y-3 mt-6 text-sm">
      <button class="w-full p-2 rounded-full bg-gradient-to-r from-amber-300 to-amber-400">
        Send a Message
      </button>

      <button class="w-full p-2 rounded-full border-2 border-amber-400">
        Keep swiping
      </button>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
</style>