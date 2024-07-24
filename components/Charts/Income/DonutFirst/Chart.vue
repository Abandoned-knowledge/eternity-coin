<template>
  <Doughnut :options="doughnutChartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, layouts } from "chart.js";
import { doughnutChartOptions } from "@/components/Charts/options";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const chartData = reactive({
  labels: [1, 2, 3, 4, 5],
  datasets: [
    {
      backgroundColor: ["#91C499", "#EAD637", "#804849", "#4dda72", "#dec971", "#edab1c", "#245ced", "#dc9792"],
      data: [123, 3466, 12312, 45747, 2323],
      hoverOffset: 15,
    },
  ],
});
</script>
