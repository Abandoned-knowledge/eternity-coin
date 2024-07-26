<template>
  <Doughnut ref="donut_chart" :options="doughnutChartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, Tooltip, Legend, ArcElement, layouts } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

import { type IDonutItem } from "~/app/interfaces/interfaces";
import { doughnutChartOptions } from "~/features/charts/options";
const props = defineProps<{ data: IDonutItem[] }>();

const chartData = computed(() => {
  return {
    labels: props.data.map((el) => el.label),
    datasets: [
      {
        backgroundColor: props.data.map((el) => el.color),
        data: props.data.map((el) => Number(el.total_value)),
        hoverOffset: 15,
      },
    ],
  };
});

const donut_chart = ref(null);

watch(
  () => props.data,
  () => {
    chartData.value.labels = props.data.map((el) => el.label);
    chartData.value.datasets[0].data = props.data.map((el) => Number(el.total_value));
    chartData.value.datasets[0].backgroundColor = props.data.map((el) => el.color);
  },
  { immediate: true },
);
</script>