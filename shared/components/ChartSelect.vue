<template>
  <select
    @change="$emit('test-name', ($event.target as HTMLSelectElement).value)"
    class="flex cursor-pointer rounded border border-frame-darked bg-frame px-2 py-1"
  >
    <option value="day">За День</option>
    <option value="week">За Неделю</option>
    <option value="month" selected>За Месяц</option>
    <option value="year">За Год</option>
  </select>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
function consoleText(event: Event) {
  const target: HTMLSelectElement = event.target as HTMLSelectElement;
  console.log(target.value);
}
</script>
