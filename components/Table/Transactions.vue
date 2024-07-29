<script setup lang="ts">
import type { ITransactionItem } from "~/app/interfaces/interfaces";
import formatDate from "~/features/date/formatDate";
const props = defineProps<{ data: ITransactionItem[] }>();
</script>

<template>
  <table class="body-text w-full table-fixed text-center">
    <thead>
      <tr>
        <th>Date</th>
        <th>Value</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in props.data">
        <td>{{ formatDate(new Date(item.date)) }}</td>
        <td :class="item.categories?.type_id == 1 ? 'income' : 'expense'">{{ item.value }} ₽</td>

        <td class="flex justify-center">
          <CategoryItem
            :category_id="item.categories?.category_id"
            :color="item.categories!.color"
            :label="item.categories!.label"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
thead th {
  @apply border-b border-b-main;
}
th,
td {
  @apply p-3;
}
tbody tr:nth-child(odd) td {
  @apply bg-frame;
}

.expense {
  color: var(--expense-color);
  &::before {
    content: "- ";
  }
}
.income {
  color: var(--income-color);
  &::before {
    content: "+ ";
  }
}
</style>
