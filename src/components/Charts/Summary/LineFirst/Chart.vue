<script setup lang="ts">
import { LineChartOptions } from "@/components/Charts/options";

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

import { Line } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["June", "July", "August"],
  datasets: [
    {
      label: "Income",
      backgroundColor: "#519872",
      borderColor: "#519872",
      data: [23, 54, 12],
      tension: 0.3,
    },
    {
      label: "Expense",
      backgroundColor: "#E94F37",
      borderColor: "#E94F37",
      data: [44, 11, 15],
      tension: 0.3,
    },
  ],
};
</script>

<template>
  <Line :data="data" :options="LineChartOptions" />
</template>

<style lang="scss" scoped></style>
