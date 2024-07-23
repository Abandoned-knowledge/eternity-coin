<script setup lang="ts"></script>

<template>
  <div class="flex h-full items-center">
    <Navigation />
    <main class="h-screen flex-grow overflow-y-scroll px-20 pt-[10px]">
      <slot></slot>
    </main>
    <Recent />
  </div>
</template>

<style lang="scss" scoped></style>
