<script lang="ts" setup>
import Canvas from "./Canvas.vue";
import type { dateType, transactionType } from "~/app/interfaces/types";
import { type IDonutItem } from "~/app/interfaces/interfaces";

const props = defineProps<{ type: transactionType }>();

const type = ref<transactionType>(props.type);
const date = ref<dateType>("month");

const { data } = await useFetch(`/api/transactions/${type.value}/date/${date.value}`);
let rawData = ref<IDonutItem[]>(data.value as IDonutItem[]);

const chartData = computed(() => {
  return {
    labels: rawData.value.map((el) => el.label),
    datasets: [
      {
        backgroundColor: rawData.value.map((el) => el.color),
        data: rawData.value.map((el) => Number(el.total_value)),
        hoverOffset: 15,
      },
    ],
  };
});

watch(
  date,
  async () => {
    const data = await $fetch(`/api/transactions/${type.value}/date/${date.value}`);
    rawData.value = data as IDonutItem[];

    chartData.value.labels = rawData.value.map((el) => el.label);
    chartData.value.datasets[0].data = rawData.value.map((el) => Number(el.total_value));
    chartData.value.datasets[0].backgroundColor = rawData.value.map((el) => el.color);
  },
  { immediate: true },
);
</script>

<template>
  <article class="frame frame_chart flex flex-col items-center">
    <div class="flex w-full items-center justify-between">
      <p class="title-text capitalize">{{ props.type }}</p>

      <ChartSelect @test-name="(type) => (date = type)" />
    </div>

    <Canvas :data="chartData" />
  </article>
</template>
