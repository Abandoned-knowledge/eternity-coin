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

const categories: number[] = data.map((el) => el.category_id);
const values: number[] = data.map((el) => Number(el.total_value));

let bgColors: string[] = [];

for (let i = 0; i < categories.length; i++) {
  bgColors.push(generateRandomColor());
}

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
