<template>
  <Doughnut :options="doughnutChartOptions" :data="props.data" />
</template>

<script lang="ts" setup>
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, Tooltip, Legend, ArcElement, layouts } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);
import { doughnutChartOptions } from "~/features/charts/options";

const props = defineProps();
</script>
