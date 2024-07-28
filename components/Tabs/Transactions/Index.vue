<script setup lang="ts">
import Table from "./Table.vue";

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
</script>

<template>
  <div class="tabs">
    <button @click="selectTab($event)" class="tabs__item title-text" v-for="tab in tabs">
      {{ tab }}
    </button>
  </div>

  <Table v-if="currentTab == 'Income'" :data="incomeData!" />
  <Table v-else-if="currentTab == 'Expense'" :data="expenseData!" />
  <Table v-else :data="allData!" />
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
