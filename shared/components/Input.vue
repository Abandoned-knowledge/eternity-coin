<script setup lang="ts">
const props = defineProps<{
  type: string;
  label?: string;
  placeholder?: string;
  outlineColor?: string;
  required?: boolean;
  value?: string | number;
}>();
let placeholder = !props.placeholder ? "" : props.placeholder;

function convertPlaceholder(ph: string): string {
  const words = ph.split(" ");
  const wordsLowerCase = words.map((word) => word.toLowerCase());
  return `input_${wordsLowerCase.join("_")}`;
}
</script>

<template>
  <div class="flex flex-col gap-1">
    <label :for="convertPlaceholder(placeholder)" class="body-text body-text_sm ml-1 text-grey">
      {{ label }}
    </label>
    <input
      :value="props.value"
      :type="props.type"
      :required="props.required"
      :name="convertPlaceholder(placeholder)"
      :id="convertPlaceholder(placeholder)"
      class="body-text rounded border border-main p-1 outline-none outline-2 outline-offset-0"
      :class="`focus:outline-${props.outlineColor}`"
      :placeholder="props.placeholder"
    />
  </div>
</template>

<style lang="scss" scoped></style>
