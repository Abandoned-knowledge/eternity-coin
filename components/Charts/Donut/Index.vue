<script lang="ts" setup>
import Canvas from "./Canvas.vue";
import type { transactionType } from "~/app/interfaces/types";
import type { IDonutItem, SelectDateType } from "~/app/interfaces/interfaces";

const props = defineProps<{ type: transactionType }>();

const type = ref<transactionType>(props.type);
const { value: date } = ref<SelectDateType>({
  start_date: "2024-01-01",
  end_date: "2025-01-01",
});

const data = await $fetch<IDonutItem[]>(
  `/api/transactions/${type.value}/date_period/${date.start_date}/${date.end_date}/donut`,
);
let rawData = ref<IDonutItem[]>(data);

function emitDate(date_period: SelectDateType) {
  date.end_date = date_period.end_date;
  date.start_date = date_period.start_date;
}

const chartData = computed(() => {
  return {
    labels: rawData.value.map((el) => el.label),
    datasets: [
      {
        backgroundColor: rawData.value.map((el) => el.color),
        data: rawData.value.map((el) => Number(el.value)),
        hoverOffset: 15,
      },
    ],
  };
});

watch(
  date,
  async () => {
    const data = await $fetch<IDonutItem[]>(
      `/api/transactions/${type.value}/date_period/${date.start_date}/${date.end_date}/donut`,
    );
    rawData.value = data!;

    if (rawData.value.length <= 0) {
      rawData.value = [
        {
          label: "nothing",
          value: "1",
          color: "#00000",
        },
      ];
    }

    chartData.value.labels = rawData.value.map((el) => el.label);
    chartData.value.datasets[0].data = rawData.value.map((el) => Number(el.value));
    chartData.value.datasets[0].backgroundColor = rawData.value.map((el) => el.color);
  },
  { immediate: true },
);
</script>

<template>
  <article class="frame frame_chart flex flex-col items-center">
    <div class="flex w-full items-center justify-between">
      <p class="title-text capitalize">{{ props.type }}</p>

      <ChartSelect @test-name="(date_period: SelectDateType) => emitDate(date_period)" />
    </div>

    <Canvas :data="chartData" />
  </article>
</template>
