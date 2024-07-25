<script lang="ts" setup>
import Canvas from "./Canvas.vue";
import type { dateType, transactionType } from "~/app/interfaces/types";
import { type IDonutItem } from "~/app/interfaces/interfaces";

const { value: type } = ref<transactionType>();
const { value: date } = ref<dateType>("year");

const { data } = await useFetch(`/api/transactions/${type}/date/${date}`);
const { value: rawData } = ref<IDonutItem[]>(data.value as IDonutItem[]);
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

    <Canvas :data="rawData" />
  </article>
</template>
