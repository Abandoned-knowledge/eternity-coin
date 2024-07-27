<script setup lang="ts">
const modal = ref<HTMLDialogElement | null>(null);

const radioButtons = [
  {
    labelName: "expense",
    inputId: "radio-expense",
    isChecked: true,
  },
  {
    labelName: "income",
    inputId: "radio-income",
    isChecked: false,
  },
];
</script>

<template>
  <div @click="modal?.showModal()" class="frame frame_accent frame_chart">
    <p class="title-text">Add Transaction</p>
    <PlusIcon class="h-16 w-16" />
  </div>

  <dialog ref="modal" class="modal">
    <div class="modal__inner">
      <button @click="modal?.close()" class="modal__close" />

      <form action="/" method="post" class="body-text flex w-full flex-col p-5 gap-5">
        
        <div class="flex w-full gap-2">
          <div class="radio-button" v-for="radioButton in radioButtons">
            <input
              type="radio"
              :value="radioButton.labelName"
              name="select-transaction-type"
              :checked="radioButton.isChecked"
              :id="radioButton.inputId"
            />
            <label :for="radioButton.inputId">{{ radioButton.labelName }}</label>
          </div>
        </div>
        
        <Input placeholder="value" outlineColor="accent">Value</Input>

      </form>

    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.radio-button {
  @apply w-full;
  input {
    @apply hidden;
  }

  input:hover + label {
    @apply bg-accent bg-opacity-50;
  }

  input:checked + label {
    @apply bg-accent font-bold;
  }

  label {
    @apply inline-block w-full cursor-pointer rounded-xl border border-main bg-frame-darked px-5 py-3 text-center capitalize transition-all duration-200 ease-in-out;
  }
}

.frame {
  @apply flex w-full cursor-pointer flex-col items-center gap-5 text-main transition-all duration-300 ease-in-out;

  &:hover {
    @apply bg-dark text-accent;

    p {
      @apply text-accent;
    }
  }
}
</style>
