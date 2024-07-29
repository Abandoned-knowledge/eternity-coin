<script setup lang="ts">
const props = defineProps<{ type: "income" | "expense" }>();

import type { ICategoryItem } from "~/app/interfaces/interfaces";

const { data: categories } = await useFetch<ICategoryItem[]>(`/api/categories/${props.type}`);
const warningMessage = ref<string | null>(null);

async function submitForm(event: Event) {
  const form = event.target as HTMLFormElement;
  const categoryName = (form.querySelector("input[name='input_enter_the_category_name']") as HTMLInputElement).value;
  const color = (form.querySelector("input[name='input_color']") as HTMLInputElement).value;

  if (!categoryName) return (warningMessage.value = "please, enter the category name");
  else if (color == "#000000") return (warningMessage.value = "please, select the color");
  else warningMessage.value = null;

  await $fetch("/api/categories/add", {
    method: "post",
    body: {
      categoryName: categoryName,
      color: color,
      type: props.type == "income" ? 1 : 2,
    },
  });

  location.reload();
}
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

    <form @submit.prevent="submitForm($event)" class="frame frame_chart flex flex-col gap-5">
      <p class="body-text body-text_lg bold">Create Category</p>

      <Input :required="true" outline-color="income" placeholder="Enter the category name">Category name</Input>

      <input type="color" id="input_color" name="input_color" hidden />
      <label for="input_color" class="button button_accent">Select the color</label>

      <p class="body-text body-text_lg text-center capitalize text-red" v-show="warningMessage">
        {{ warningMessage }}
      </p>
      <button type="submit" class="button button_main">Add</button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
