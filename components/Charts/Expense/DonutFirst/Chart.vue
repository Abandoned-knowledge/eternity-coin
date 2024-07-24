<template>
  <Doughnut :options="doughnutChartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, layouts } from "chart.js";
import { doughnutChartOptions } from "~/components/Charts/options";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const chartData = reactive({
  labels: ["Groceries", "Auto", "Metro"],
  datasets: [
    {
      backgroundColor: ["#789f79", "#a97db3", "#c24d29"],
      data: [23, 122, 32],
      hoverOffset: 15,
    },
  ],
});
</script>
