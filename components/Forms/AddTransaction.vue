<script setup lang="ts">
import type { ICategoryItem } from "~/app/interfaces/interfaces";
import type { transactionType } from "~/app/interfaces/types";
const props = defineProps<{ categories: ICategoryItem[]; type: transactionType }>();

const selectedItem = ref<ICategoryItem | null>();
const warningMessage = ref<string | null>(null);

function selectCategoryItem(category: ICategoryItem) {
  selectedItem.value = {
    category_id: category.category_id,
    label: category.label,
    color: category.color,
  };
}

async function submitForm(e: Event) {
  const target: HTMLFormElement = e.target as HTMLFormElement;

  const { value: categoryId } = target.querySelector("input[name=input_category_id]") as HTMLInputElement;
  const { value: transactionType } = target.querySelector("input[name=input_type]") as HTMLInputElement;
  const { value } = target.querySelector("input[name=input_value]") as HTMLInputElement;

  if (!categoryId) return (warningMessage.value = "please, select the category");
  else if (!transactionType) return (warningMessage.value = "please, close and open modal");
  else if (!value) return (warningMessage.value = "please, enter the value");
  else warningMessage.value = null;

  await $fetch("/api/transactions/add", {
    method: "post",
    body: {
      input_category_id: categoryId,
      input_type: transactionType,
      input_value: value,
    },
  });

  location.reload();
}
</script>

<template>
  <form @submit.prevent="submitForm($event)" class="mt-5 flex flex-col gap-5">
    <span class="body-text body-text_lg font-bold">Select Category</span>

    <div class="body-text body-text_sm flex items-center gap-1 text-grey">
      selected category -

      <CategoryItem
        v-if="selectedItem"
        :key="selectedItem.category_id"
        :color="selectedItem.color"
        :label="selectedItem.label"
      />

      <span v-else>not selected</span>
    </div>

    <div class="flex flex-wrap gap-2">
      <CategoryItem
        v-for="category in categories"
        @click="selectCategoryItem(category)"
        :key="category.category_id"
        :color="category.color"
        :label="category.label"
        class="cursor-pointer"
      />
    </div>

    <Input type="text" :value="selectedItem?.category_id" name="input_category_id" class="hidden" />
    <Input type="text" :value="props.type" name="input_type" class="hidden" />

    <Input type="text" placeholder="value" outline-color="accent" />

    <p class="body-text body-text_lg text-center capitalize text-red" v-show="warningMessage">
      {{ warningMessage }}
    </p>

    <button type="submit" class="button button_main">submit</button>
  </form>
</template>

<style lang="scss" scoped></style>
