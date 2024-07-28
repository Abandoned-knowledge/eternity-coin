<script setup lang="ts">
import type { IDonutItem, ILineItem } from "~/app/interfaces/interfaces";
import type { dateType } from "~/app/interfaces/types";

const date = ref<dateType>("year");

const {
  data: { value: incomeDonutData },
} = await useFetch<IDonutItem[]>(`/api/transactions/income/date/${date.value}`);
const {
  data: { value: incomeLineData },
} = await useFetch<ILineItem[]>(`/api/transactions/income/date/monthly`);

const chartDonutData = computed(() => {
  return {
    labels: incomeDonutData!.map((el) => el.label),
    datasets: [
      {
        backgroundColor: incomeDonutData!.map((el) => el.color),
        data: incomeDonutData!.map((el) => Number(el.total_value)),
        hoverOffset: 15,
      },
    ],
  };
});

console.log(incomeLineData);

const chartLineData = computed(() => {
  return {
    labels: incomeLineData!.map((el) => el.month_name),
    datasets: [
      {
        label: "income",
        backgroundColor: "#28a61c",
        borderColor: "#28a61c",
        data: incomeLineData!.map((el) => el.total_value),
        tension: 0.3,
      },
    ],
  };
});
</script>

<template>
  <div class="mt-5 flex gap-10">
    <div class="frame frame_chart">
      <ChartsDonutCanvas :data="chartDonutData" />
    </div>
    <div class="frame frame_chart w-[70%]">
      <ChartsLineCanvas :data="chartLineData" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
