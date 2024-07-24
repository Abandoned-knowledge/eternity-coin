<script setup lang="ts"></script>

<template>
  <nuxtLink to="/account" class="frame frame_dark flex items-center justify-between p-5 transition-all duration-200">
    <div>
      <p class="menu-text">Gleb Gleb</p>
      <p class="body-text body-text_sm text-grey">googleMail@gmail.com</p>
    </div>

    <!-- <NuxtLink to="/exit">
      <ExitIcon class="rounded text-red transition-all hover:bg-red-fade" />
    </NuxtLink> -->
  </nuxtLink>
</template>

<style lang="scss" scoped>
.router-link-exact-active.frame {
  @apply bg-main;

  & .menu-text {
    @apply text-white;
  }
}
</style>
