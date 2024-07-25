<script setup lang="ts"></script>

<template>
  <div class="flex gap-5">
    <ChartsDonutExpense class="w-[30%]" />
    <ChartsDonutIncome class="w-[30%]" />

    <div class="flex flex-grow flex-col gap-5">
      <AddTransaction />
      <CurrentValue class="flex-grow" />
    </div>
  </div>

  <ChartsLineSummary />
</template>

<style lang="scss" scoped></style>
