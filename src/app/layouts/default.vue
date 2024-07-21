<script setup lang="ts"></script>

<template>
  <div class="flex h-full items-center">
    <NavigationSidebar />
    <main class="flex-grow h-screen overflow-y-scroll pt-[10px]">
      <slot></slot>
    </main>
    <RecentSidebar />
  </div>
</template>

<style lang="scss" scoped></style>
