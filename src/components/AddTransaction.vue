<script setup lang="ts"></script>

<template>
  <div class="frame frame_accent frame_chart">
    <p class="title-text">Add Transaction</p>
    <PlusIcon class="h-16 w-16" />
  </div>
</template>

<style lang="scss" scoped>
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
