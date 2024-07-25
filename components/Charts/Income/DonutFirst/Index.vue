<script lang="ts" setup>
import Chart from "./Chart.vue";

import { type IDonutItem } from "~/app/interfaces/interfaces";
const props = defineProps<{ data: IDonutItem[] }>();
</script>

<template>
  <article class="frame frame_chart flex flex-col items-center">
    <div class="flex w-full items-center justify-between">
      <p class="title-text">Income</p>

      <select
        @change="console.log(($event.target! as HTMLSelectElement).value)"
        class="flex cursor-pointer rounded border border-frame-darked bg-frame px-2 py-1"
      >
        <option value="day">За День</option>
        <option value="week">За Неделю</option>
        <option value="month" selected>За Месяц</option>
        <option value="year">За Год</option>
      </select>
    </div>

    <Chart :data="props.data"/>
  </article>
</template>
