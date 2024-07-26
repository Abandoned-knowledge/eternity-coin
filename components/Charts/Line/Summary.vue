<script setup lang="ts">
import Canvas from "./Canvas.vue";
import type { dateType } from "~/app/interfaces/types";
import type { ILineItem } from "~/app/interfaces/interfaces";
const date: dateType = 'monthly';

const { data: incomeData } = await useFetch<ILineItem[]>(`/api/transactions/income/date/${date}`);
const { data: expenseData } = await useFetch<ILineItem[]>(`/api/transactions/expense/date/${date}`);

console.log(toRaw(incomeData.value));
console.log(toRaw(expenseData.value));

const chartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  datasets: [
    {
      label: "income",
      backgroundColor: "#28a61c",
      borderColor: "#28a61c",
      data: incomeData.value?.map(el => el.total_value),
    },
    
    {
      label: "expense",
      backgroundColor: "#e35151",
      borderColor: "#e35151",
      data: expenseData.value?.map(el => el.total_value),
    },
  ],
};
</script>

<template>
  <div class="frame frame_chart mt-10 h-[40vh]">
    <Canvas :data="chartData"/>
  </div>
</template>
