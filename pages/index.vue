<script setup lang="ts">
import { type dateType } from "~/app/interfaces/types";
import { type IDonutItem } from "~/app/interfaces/interfaces";

const date: dateType = "year";
const { data } = await useFetch(`/api/transactions/income/date/${date}`);

const rawData = toRaw(data.value) as IDonutItem[];
</script>

<template>
  <div class="flex gap-5">
    <ChartsExpenseDonutFirst class="w-[30%]" />
    <ChartsIncomeDonutFirst :data="rawData" class="w-[30%]" />

    <div class="flex flex-grow flex-col gap-5">
      <AddTransaction />
      <CurrentValue class="flex-grow" />
    </div>
  </div>

  <ChartsSummaryLineFirst />
</template>

<style lang="scss" scoped></style>
