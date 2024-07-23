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
  labels: ["Main Job", "Freelance"],
  datasets: [
    {
      backgroundColor: ["#91C499", "#EAD637"],
      data: [45333, 77666],
      hoverOffset: 15,
    },
  ],
});
</script>
