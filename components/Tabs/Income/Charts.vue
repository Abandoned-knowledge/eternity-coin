<script setup lang="ts">
import type { IDonutItem, ILineItem, SelectDateType } from "~/app/interfaces/interfaces";

const { value: date } = ref<SelectDateType>({
  start_date: "2024-01-01",
  end_date: "2025-01-01",
});

const incomeDonutData = await $fetch<IDonutItem[]>(`/api/transactions/income/date_period/${date.start_date}/${date.end_date}/donut`);
const incomeLineData = await $fetch<ILineItem[]>(`/api/transactions/income/date_period/${date.start_date}/${date.end_date}/line`);

const chartDonutData = computed(() => {
  return {
    labels: incomeDonutData!.map((el) => el.label),
    datasets: [
      {
        backgroundColor: incomeDonutData!.map((el) => el.color),
        data: incomeDonutData!.map((el) => Number(el.value)),
        hoverOffset: 15,
      },
    ],
  };
});

console.log(incomeLineData);

const chartLineData = computed(() => {
  return {
    labels: incomeLineData!.map((el) => el.month),
    datasets: [
      {
        label: "income",
        backgroundColor: "#28a61c",
        borderColor: "#28a61c",
        data: incomeLineData!.map((el) => el.value),
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
