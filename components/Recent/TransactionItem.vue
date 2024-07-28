<script setup lang="ts">
import type { ITransactionItem } from "~/app/interfaces/interfaces";
import formatDate from "~/features/date/formatDate";

interface inter extends ITransactionItem {
  isIncome: boolean;
}

const props = defineProps<inter>();
</script>

<template>
  <li>
    <div class="transaction" :class="{ transaction_income: isIncome }">
      <div class="flex flex-col gap-2">
        <p class="transaction__category body-text body-text_lg bold">{{ props.label }}</p>
        <p class="transaction__date body-text body-text_sm text-grey">{{ formatDate(props.date) }}</p>
      </div>
      <p class="transaction__value body-text body-text_lg bold">{{ props.value }} ₽</p>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.transaction {
  @apply flex items-center justify-between;

  &:is(.transaction_income) .transaction__value {
    @apply text-income;

    &::before {
      content: "+ ";
    }
  }

  .transaction__value {
    @apply text-expense;

    &::before {
      content: "- ";
    }
  }
}
</style>
