<script setup lang="ts">
const props = defineProps<{ type: "income" | "expense" }>();

import type { ITransactionItem } from "~/app/interfaces/interfaces";
const incomeData = await $fetch<ITransactionItem[]>(`/api/transactions/${props.type}`);
</script>

<template>
  <TableTransactions :data="incomeData!" />
</template>
