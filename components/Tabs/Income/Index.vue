<script setup lang="ts">
import Charts from "./Charts.vue";
import Categories from "./Categories.vue";
import Transactions from "./Transactions.vue";

const tabs = [
  {
    title: "Charts",
    component: Charts,
  },
  {
    title: "Categories",
    component: Categories,
  },
  {
    title: "Transactions",
    component: Transactions,
  },
];

const currentTab = shallowRef();

function selectTab(event: Event | HTMLDivElement, tab: Component) {
  const target: HTMLDivElement = event instanceof Event ? (event.target as HTMLDivElement) : event;

  const allTabs: HTMLDivElement[] = Array.from(document.querySelectorAll(".tabs__item"));
  allTabs.forEach((tab) => tab.classList.remove("selected"));
  target.classList.add("selected");

  currentTab.value = tab;
}

onMounted(() => {
  const firstTab = document.querySelector(".tabs__item") as HTMLDivElement;
  const firstComponent = tabs[0].component;
  selectTab(firstTab, firstComponent);
});
</script>

<template>
  <div class="tabs">
    <button v-for="tab in tabs" @click="selectTab($event, tab.component)" class="tabs__item title-text">
      {{ tab.title }}
    </button>
  </div>
  <component :is="currentTab" />
</template>

<style lang="scss" scoped>
.tabs {
  @apply flex w-fit gap-3 overflow-hidden rounded-xl bg-frame;

  &__item {
    @apply rounded-xl px-5 py-3;

    &.selected {
      @apply bg-income text-white;
    }
  }
}
</style>
