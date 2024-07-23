<script setup lang="ts"></script>

<template>
  <table class="body-text w-full text-center">
    <thead>
      <tr>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
        <th>Wallet</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="flex flex-col items-center gap-1">
          21 july, 2024 <span class="body-text body-text_sm text-grey">Monday</span>
        </td>
        <td>Health</td>
        <td class="text-income">6522 ₽</td>
        <td>Main</td>
      </tr>
      <tr>
        <td class="flex flex-col items-center gap-1">
          21 july, 2024 <span class="body-text body-text_sm text-grey">Monday</span>
        </td>
        <td>Health</td>
        <td class="text-income">6522 ₽</td>
        <td>Main</td>
      </tr>
      <tr>
        <td class="flex flex-col items-center gap-1">
          21 july, 2024 <span class="body-text body-text_sm text-grey">Monday</span>
        </td>
        <td>Health</td>
        <td class="text-income">6522 ₽</td>
        <td>Main</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
td,
th {
  @apply p-2;
}

thead th {
  @apply border-b border-b-main;
}

tbody tr:nth-child(odd) td {
    @apply bg-frame;
}
</style>
