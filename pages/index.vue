<script setup lang="ts"></script>

<template>
  <div class="flex gap-5">
    <ChartsExpenseDonutFirst class="w-[30%]" />
    <ChartsIncomeDonutFirst class="w-[30%]" />

    <div class="flex flex-grow flex-col gap-5">
      <AddTransaction />
      <CurrentValue class="flex-grow" />
    </div>
  </div>

  <ChartsSummaryLineFirst />
</template>

<style lang="scss" scoped></style>
