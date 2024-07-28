<script setup lang="ts">
const props = defineProps<{
  placeholder: string;
  outlineColor: string;
  required?: boolean
}>();

function convertPlaceholder(ph: string): string {
  const words = ph.split(" ");
  const wordsLowerCase = words.map((word) => word.toLowerCase());
  return `input_${wordsLowerCase.join("_")}`;
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label :for="convertPlaceholder(props.placeholder)" class="body-text body-text_sm ml-1 text-grey">
      <slot></slot>
    </label>
    <input
      type="text"
      :required="props.required"
      :name="convertPlaceholder(props.placeholder)"
      :id="convertPlaceholder(props.placeholder)"
      class="body-text rounded border border-main p-1 outline-none outline-2 outline-offset-0"
      :class="`focus:outline-${props.outlineColor}`"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<style lang="scss" scoped></style>
