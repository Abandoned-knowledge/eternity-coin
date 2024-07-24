<script setup lang="ts">
import { type ICategoryItem } from "~/app/interfaces/interfaces";
const props = defineProps<ICategoryItem>();
</script>

<template>
  <div class="body-text w-fit rounded-[10px] px-3 py-1 text-white" :style="{ backgroundColor: props.color }">
    {{ props.title }}
  </div>
</template>

<style lang="scss" scoped></style>
