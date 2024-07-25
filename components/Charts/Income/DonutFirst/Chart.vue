<template>
  <Doughnut :options="doughnutChartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
import generateRandomColor from "~/features/color/generateRandomColor";
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, layouts } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

import { doughnutChartOptions } from "@/components/Charts/options";

import { type IDonutItem } from "~/app/interfaces/interfaces";
const { data } = defineProps<{ data: IDonutItem[] }>();

const values: number[] = data.map((el) => Number(el.total_value));
const categories: string[] = data.map((el) => el.label);
const bgColors: string[] = data.map((el) => el.color);

const chartData = reactive({
  labels: categories,
  datasets: [
    {
      backgroundColor: bgColors,
      data: values,
      hoverOffset: 15,
    },
  ],
});
</script>
