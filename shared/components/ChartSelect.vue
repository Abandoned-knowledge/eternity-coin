<template>
  <select
    @change="$emit('test-name', emitDate($event))"
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
import type { SelectDateType } from "~/app/interfaces/interfaces";
import { formatDateForDB } from "~/features/date/formatDate";

function emitDate(event: Event): SelectDateType {
  const select = event.target as HTMLSelectElement;

  let current = new Date();
  let start;
  let end;

  switch (select.value) {
    case "day":
      start = formatDateForDB(current);
      end = formatDateForDB(current);
      break;

    case "week":
      const days = 7;
      const timestamp = new Date().setDate(current.getDate() - days);
      start = formatDateForDB(new Date(timestamp));
      end = formatDateForDB(current);
      break;

    case "month":
      start = new Date();
      start.setMonth(current.getMonth());
      start.setDate(1);

      start = formatDateForDB(start);

      end = new Date();
      end.setMonth(current.getMonth() + 1);
      end.setDate(1);

      end = formatDateForDB(end);
      break;

    case "year":
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
      break;
  }

  return {
    start_date: start!,
    end_date: end!,
  };
}
</script>
