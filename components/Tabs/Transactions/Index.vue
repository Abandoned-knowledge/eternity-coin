<script setup lang="ts">
import type { ITransactionItem } from "~/app/interfaces/interfaces";
const tabs = ["All", "Income", "Expense"];

const currentTab = ref();

function selectTab(event: Event | HTMLDivElement) {
  const target: HTMLDivElement = event instanceof Event ? (event.target as HTMLDivElement) : event;

  const allTabs: HTMLDivElement[] = Array.from(document.querySelectorAll(".tabs__item"));
  allTabs.forEach((tab) => tab.classList.remove("selected"));
  target.classList.add("selected");

  currentTab.value = target.textContent;
}

const { data: allData } = await useFetch<ITransactionItem[]>("/api/transactions/all");
const { data: incomeData } = await useFetch<ITransactionItem[]>("/api/transactions/income/date/all");
const { data: expenseData } = await useFetch<ITransactionItem[]>("/api/transactions/expense/date/all");

onMounted(() => selectTab(document.querySelector(".tabs__item") as HTMLDivElement));
</script>

<template>
  <div class="tabs">
    <button @click="selectTab($event)" class="tabs__item title-text" v-for="tab in tabs">
      {{ tab }}
    </button>
  </div>

  <TableTransactions v-if="currentTab == 'Income'" :data="incomeData!" />
  <TableTransactions v-else-if="currentTab == 'Expense'" :data="expenseData!" />
  <TableTransactions v-else :data="allData!" />
</template>

<style lang="scss" scoped>
.tabs {
  @apply flex w-fit gap-3 overflow-hidden rounded-xl bg-frame;
  &__item {
    @apply rounded-xl px-5 py-3;

    &.selected {
      @apply bg-accent;
    }
  }
}
</style>
