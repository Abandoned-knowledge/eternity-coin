<script setup lang="ts">
const props = defineProps<{ type: "income" | "expense" }>();

import type { IDonutItem, ILineItem, SelectDateType } from "~/app/interfaces/interfaces";

const { value: date } = ref<SelectDateType>({
  start_date: "2024-01-01",
  end_date: "2025-01-01",
});

const donutData = await $fetch<IDonutItem[]>(
  `/api/transactions/${props.type}/date_period/${date.start_date}/${date.end_date}/donut`,
);
const lineData = await $fetch<ILineItem[]>(
  `/api/transactions/${props.type}/date_period/${date.start_date}/${date.end_date}/line`,
);

const chartDonutData = computed(() => {
  return {
    labels: donutData!.map((el) => el.label),
    datasets: [
      {
        backgroundColor: donutData!.map((el) => el.color),
        data: donutData!.map((el) => Number(el.value)),
        hoverOffset: 15,
      },
    ],
  };
});

const chartLineData = computed(() => {
  return {
    labels: lineData!.map((el) => el.month),
    datasets: [
      {
        label: "income",
        backgroundColor: props.type == "income" ? "#28a61c" : "#e35151",
        borderColor: props.type == "income" ? "#28a61c" : "#e35151",
        data: lineData!.map((el) => el.value),
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
