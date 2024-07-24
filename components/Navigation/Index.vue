<script setup lang="ts">
import Account from "./Account.vue";
import Menu from "./Menu.vue";
</script>

<template>
  <aside class="frame frame_sidebar flex min-w-fit flex-col">
    <MainLogo class="mx-4" />
    <Menu />
    <Account class="mt-auto" />
  </aside>
</template>

<style lang="scss" scoped></style>
