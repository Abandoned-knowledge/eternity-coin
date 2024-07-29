<template>
  <select
    @change="$emit('test-name', emitDate($event))"
    class="flex cursor-pointer rounded border border-frame-darked bg-frame px-2 py-1"
  >
    <option value="day">For a day</option>
    <option value="week">For a week</option>
    <option value="month" selected>For a month</option>
    <option value="year">For an year</option>
  </select>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import type { SelectDateType } from "~/app/interfaces/interfaces";
import { formatDateForDB } from "~/features/date/formatDate";

function emitDate(event: Event): SelectDateType {
  const select = event.target as HTMLSelectElement;

  let current = new Date();
  let start;
  let end;

  if (select.value === "day") {
    const timestampEnd = new Date().setDate(current.getDate() + 1);
    start = formatDateForDB(current);
    end = formatDateForDB(current);
    end = formatDateForDB(new Date(timestampEnd));
  } else if (select.value === "week") {
    const days = 7;
    const timestampStart = new Date().setDate(current.getDate() - days);
    const timestampEnd = new Date().setDate(current.getDate() + 1);

    start = formatDateForDB(new Date(timestampStart));
    end = formatDateForDB(new Date(timestampEnd));
  } else if (select.value === "month") {
    start = new Date();
    start.setMonth(current.getMonth());
    start.setDate(1);
    start = formatDateForDB(start);

    end = new Date();
    end.setMonth(current.getMonth() + 1);
    end.setDate(1);
    end = formatDateForDB(end);
  } else if (select.value === "year") {
    start = new Date();
    start.setFullYear(current.getFullYear());
    start.setMonth(0);
    start.setDate(1);
    start = formatDateForDB(start);

    end = new Date();
    end.setFullYear(current.getFullYear() + 1);
    end.setMonth(0);
    end.setDate(1);
    end = formatDateForDB(end);
  }

  return {
    start_date: start!,
    end_date: end!,
  };
}
</script>
