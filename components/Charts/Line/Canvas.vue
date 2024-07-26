<script setup lang="ts">
import { LineChartOptions } from "~/features/charts/options";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const props = defineProps();
</script>

<template>
  <Line :options="LineChartOptions" :data="props.data" />
</template>

<style lang="scss" scoped></style>
