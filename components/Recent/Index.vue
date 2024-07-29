<script setup lang="ts">
import TransactionItem from "./TransactionItem.vue";
import type { ITransactionItem } from "~/app/interfaces/interfaces";
const { data } = await useFetch<ITransactionItem[]>("/api/transactions");
</script>

<template>
  <aside class="frame frame_sidebar min-w-fit overflow-y-scroll px-5 pb-5">
    <p class="title-text">Recent transactions</p>

    <ul class="mt-10 flex flex-col gap-8">
      <TransactionItem
        v-for="item in data"
        :date="new Date(item.date)"
        :is-income="item.categories?.type_id == 1"
        :label="item.categories?.color"
        :value="item.value"
      />
    </ul>
  </aside>
</template>
