<script setup lang="ts">
const props = defineProps<{ type: "income" | "expense" }>();

import type { ICategoryItem } from "~/app/interfaces/interfaces";

const { data: categories } = await useFetch<ICategoryItem[]>(`/api/categories/${props.type}`);
</script>

<template>
  <div class="mt-5 flex flex-col gap-5">
    <div class="frame frame_chart flex flex-col gap-5">
      <p class="body-text body-text_lg bold">Categories</p>
      <div class="flex flex-wrap gap-3">
        <CategoryItem
          v-for="category in categories"
          :category_id="category.category_id"
          :color="category.color"
          :label="category.label"
          class="cursor-pointer"
        />
      </div>
    </div>

    <FormsCreateCategory :type="props.type"/>
  </div>
</template>

<style lang="scss" scoped></style>
