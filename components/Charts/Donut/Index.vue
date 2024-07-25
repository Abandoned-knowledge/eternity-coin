<script lang="ts" setup>
import Canvas from "./Canvas.vue";
import type { dateType, transactionType } from "~/app/interfaces/types";
import { type IDonutItem } from "~/app/interfaces/interfaces";

const props = defineProps<{ type: transactionType }>();

const { value: type } = ref<transactionType>(props.type);
const { value: date } = ref<dateType>("year");

const { data } = await useFetch(`/api/transactions/${type}/date/${date}`);
const { value: rawData } = ref<IDonutItem[]>(data.value as IDonutItem[]);
</script>

<template>
  <article class="frame frame_chart flex flex-col items-center">
    <div class="flex w-full items-center justify-between">
      <p class="title-text capitalize">{{ props.type }}</p>

      <ChartSelect />
    </div>

    <Canvas :data="rawData" />
  </article>
</template>
