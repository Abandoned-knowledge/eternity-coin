<script setup lang="ts">
const { data: tabs } = await useFetch("/api/income/tabs");

const currentComponentTitle = ref<string>();

function switchTab(componentTitle: string, event: Event | HTMLButtonElement) {
  const allTabs = document.querySelectorAll(".tab");
  let currentTab: HTMLButtonElement;

  event instanceof Event ? (currentTab = event.target as HTMLButtonElement) : (currentTab = event);
  allTabs.forEach((tab) => tab.classList.remove("active"));
  currentTab.classList.add("active");
  currentComponentTitle.value = componentTitle;
}

onMounted(() => {
  const firstTab = document.querySelector(".tab");
  switchTab(tabs.value![0].tabTitle, firstTab as HTMLButtonElement);
});
</script>

<template>
  <div class="flex w-fit gap-2 rounded bg-frame">
    <button @click="switchTab(tab.tabComponent, $event)" v-for="tab in tabs" class="title-text tab">
      {{ tab.tabTitle }}
    </button>
  </div>
  <component :is="`TabsIncomeContent${currentComponentTitle}`" class="mt-10"/>
</template>

<style lang="scss" scoped>
.tab {
  @apply rounded bg-frame px-5 py-3 text-grey;

  &.active {
    @apply bg-income text-white;
  }
}
</style>
