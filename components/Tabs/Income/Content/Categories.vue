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

    <form action="/" method="post" class="frame frame_chart flex flex-col gap-5">
      <p class="title-text">Create Category</p>
      <Input required :outline-color="'income'" placeholder="Category Name"> Category Name </Input>

      <input type="color" id="button-select-color" hidden />
      <label for="button-select-color" class="button button_accent body-text">Select Color</label>
      <button type="submit" class="button button_main body-text">Add</button>
    </form>

    <form action="/" method="post" class="frame frame_chart flex flex-col gap-5 h-fit">
      <p class="title-text">Create Tag</p>
      <Input required :outline-color="'income'" placeholder="Tag Name"> Tag Name </Input>

      <input type="color" id="button-select-color" hidden />
      <button type="submit" class="button button_main body-text">Add</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
