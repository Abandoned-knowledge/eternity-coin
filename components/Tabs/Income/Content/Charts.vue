<script setup lang="ts">
import { type ITransaction } from "~/app/interfaces/interfaces";

const { data } = await useFetch<ITransaction[]>("api/income/transactions");

function filterByType(transactions: ITransaction[]) {
  const filtered = transactions.filter((transaction) => transaction.transaction_type_is_income);
  return filtered;
}
type date = "day" | "week" | "month" | "year";

function formatDate(date: Date) {
  let dd: string | number = date.getDate();
  let mm: string | number = date.getMonth() + 1;
  const yy = date.getFullYear();

  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;

  return `${dd}/${mm}/${yy}`;
}

function filterByDate(transactions: ITransaction[], filterType: date) {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  if (filterType == "day") {
    return transactions.filter((tr) => new Date(tr.date) >= currentDate);
  } else if (filterType == "week") {
    const currentDay = currentDate.getDate();
    const days = 7;

    const startDate = new Date(new Date().setDate(currentDay - days));
    const endDate = currentDate;

    return transactions.filter((tr) => {
      const date = new Date(tr.date);
      return startDate <= date && date <= endDate;
    });
  } else if (filterType == "month") {
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    return transactions.filter((tr) => {
      const date = new Date(tr.date);
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return month == currentMonth && year == currentYear;
    });
  } else if (filterType == "year") {
    const currentYear = currentDate.getFullYear();

    return transactions.filter((tr) => new Date(tr.date).getFullYear() == currentYear);
  }
}
const filteredByType = filterByType(toRaw(data.value) as ITransaction[]);
</script>

<template>
  <div class="flex gap-5">
    <div class="frame frame_chart w-[30%]">
      <ChartsIncomeDonutFirstChart />
    </div>
    <div class="frame frame_chart w-full">
      <ChartsIncomeLine />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
