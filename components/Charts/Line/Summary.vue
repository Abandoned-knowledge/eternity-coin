<script setup lang="ts">
import Canvas from "./Canvas.vue";
import type { dateType } from "~/app/interfaces/types";
import type { ILineItem } from "~/app/interfaces/interfaces";
const date: dateType = "monthly";

const { data: { value: incomeData } } = await useFetch<ILineItem[]>(`/api/transactions/income/date/${date}`);
const { data: { value: expenseData } } = await useFetch<ILineItem[]>(`/api/transactions/expense/date/${date}`);

const rawChartLabels: string[] = [];

incomeData?.forEach((el) => rawChartLabels.push(el.month_name));
expenseData?.forEach((el) => rawChartLabels.push(el.month_name));

const chartLabels = [... new Set(rawChartLabels)];


const chartData = {
  labels: chartLabels,
  datasets: [
    {
      label: "income",
      backgroundColor: "#28a61c",
      borderColor: "#28a61c",
      data: incomeData?.map((el) => el.total_value),
      tension: 0.3,
    },

    {
      label: "expense",
      backgroundColor: "#e35151",
      borderColor: "#e35151",
      data: expenseData?.map((el) => el.total_value),
      tension: 0.3,
    },
  ],
};
</script>

<template>
  <div class="frame frame_chart mt-10 h-[40vh]">
    <Canvas :data="chartData" />
  </div>
</template>
