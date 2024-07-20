<script setup lang="ts">
const { isIncome } = defineProps<{ isIncome: boolean }>();
</script>

<template>
  <li>
    <div class="transaction" :class="{ transaction_income: isIncome }">
      <div>
        <p class="transaction__category body-text body-text_lg bold">Groceries</p>
        <p class="transaction__date body-text body-text_sm text-grey">24 jul, wd</p>
      </div>
      <p class="transaction__value body-text body-text_lg bold">4500 ₽</p>
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
