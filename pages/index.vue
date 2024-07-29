<template>
  <div class="flex gap-5">
    <ChartsDonut :type="'expense'" class="w-[30%]" />
    <ChartsDonut :type="'income'" class="w-[30%]" />

    <!-- <div class="flex flex-grow flex-col gap-5">
      <ModalAddTransaction />
      <CurrentValue class="flex-grow" />
    </div> -->
  </div>

  <ChartsLineSummary />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
</script>
