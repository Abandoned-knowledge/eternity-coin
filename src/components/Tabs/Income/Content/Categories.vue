<script setup lang="ts">
const { data: categories } = await useFetch("/api/income/categories");
const { data: tags } = await useFetch("/api/income/tags");
</script>

<template>
  <div class="grid grid-cols-2 gap-5">
    <div class="frame frame_chart flex flex-col gap-5">
      <p class="title-text">Categories</p>

      <div class="flex flex-wrap gap-5">
        <CategoryItem v-for="category in categories" :color="category.color" :title="category.title" />
      </div>
    </div>

    <div class="frame frame_chart flex flex-col gap-5">
      <p class="title-text">Tags</p>
      <div class="flex flex-wrap gap-5">
        <TagItem v-for="tagTitle in tags">
          {{ tagTitle }}
        </TagItem>
      </div>
    </div>

    <form action="/" method="post" class="frame frame_chart">
      <Input :outline-color="'income'" placeholder="Category Name"> Category Name </Input>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
