<script setup lang="ts">
import type { ITransactionItem } from "~/app/interfaces/interfaces";
const incomeData = await $fetch<ITransactionItem[]>("/api/transactions/income");
</script>

<template>
  <TableTransactions :data="incomeData!" />
</template>
