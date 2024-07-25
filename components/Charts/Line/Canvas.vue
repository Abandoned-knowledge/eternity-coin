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

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      borderColor: "#f87979",
      data: [40, 39, 10, 40, 39, 80, 40],
    },
  ],
};
</script>

<template>
  <Line :options="LineChartOptions" :data="data" />
</template>

<style lang="scss" scoped></style>
