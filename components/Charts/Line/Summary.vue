<script setup lang="ts">
import Canvas from "./Canvas.vue";
import { formatDateForDB } from "~/features/date/formatDate";
import type { ILineItem, SelectDateType } from "~/app/interfaces/interfaces";

let current = new Date();
let start;
let end;

start = new Date();
start.setFullYear(current.getFullYear());
start.setMonth(0);
start.setDate(1);
start = formatDateForDB(start);

end = new Date();
end.setFullYear(current.getFullYear() + 1);
end.setMonth(0);
end.setDate(1);
end = formatDateForDB(end);

const { value: date } = ref<SelectDateType>({
  start_date: start,
  end_date: end,
});

const incomeData = await $fetch<ILineItem[]>(`/api/transactions/income/date_period/${date.start_date}/${date.end_date}/line`);
const expenseData = await $fetch<ILineItem[]>(`/api/transactions/expense/date_period/${date.start_date}/${date.end_date}/line`);

const rawChartLabels: string[] = [];

incomeData?.forEach((el) => rawChartLabels.push(el.month));
expenseData?.forEach((el) => rawChartLabels.push(el.month));

const chartLabels = [... new Set(rawChartLabels)];


const chartData = {
  labels: chartLabels,
  datasets: [
    {
      label: "income",
      backgroundColor: "#28a61c",
      borderColor: "#28a61c",
      data: incomeData?.map((el) => el.value),
      tension: 0.3,
    },

    {
      label: "expense",
      backgroundColor: "#e35151",
      borderColor: "#e35151",
      data: expenseData?.map((el) => el.value),
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
