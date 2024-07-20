<script setup lang="ts">
const { data: links } = await useFetch("/api/navigationLinks");
</script>

<template>
  <nav class="nav">
    <NuxtLink v-for="link in links" :to="link.to" class="menu-text nav__item">
      <component :is="`Navigation${link.iconName}Icon`" />
      {{ link.title }}
    </NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  @apply mt-10 flex flex-col gap-1;
  &__item {
    @apply flex items-center gap-2 rounded-xl p-2 transition-all duration-200 ease-in-out;
  }
}

.router-link-exact-active {
  @apply bg-main text-accent;
}
</style>
