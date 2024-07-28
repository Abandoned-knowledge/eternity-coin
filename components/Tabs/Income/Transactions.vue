<script setup lang="ts">
import type { ITransactionItem } from "~/app/interfaces/interfaces";
const { data: incomeData } = await useFetch<ITransactionItem[]>("/api/transactions/income/date/all");
</script>

<template>
  <TableTransactions :data="incomeData!" />
</template>
