<script lang="ts" setup>
import Canvas from "./Canvas.vue";
import type { dateType, transactionType } from "~/app/interfaces/types";
import { type IDonutItem } from "~/app/interfaces/interfaces";

const props = defineProps<{ type: transactionType }>();

const type = ref<transactionType>(props.type);
const date = ref<dateType>("month");

const { data } = await useFetch(`/api/transactions/${type.value}/date/${date.value}`);
let rawData = ref<IDonutItem[]>(data.value as IDonutItem[]);

watch(date, async () => {
  const data = await $fetch(`/api/transactions/${type.value}/date/${date.value}`);
  rawData.value = data as IDonutItem[];  

  console.log(data);
})
</script>

<template>
  <article class="frame frame_chart flex flex-col items-center">
    <div class="flex w-full items-center justify-between">
      <p class="title-text capitalize">{{ props.type }}</p>

      <ChartSelect @test-name="(e) => (date = e)" />
    </div>

    <Canvas :data="rawData" />
  </article>
</template>
