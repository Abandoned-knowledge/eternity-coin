<script setup lang="ts">
import TransactionItem from "./TransactionItem.vue";
</script>

<template>
  <aside class="frame frame_sidebar overflow-y-scroll px-5 pb-5">
    <p class="title-text">Recent transactions</p>

    <ul class="mt-10 flex flex-col gap-5">
      <TransactionItem :is-income="true" />
      <TransactionItem :is-income="false" />
    </ul>
  </aside>
</template>
