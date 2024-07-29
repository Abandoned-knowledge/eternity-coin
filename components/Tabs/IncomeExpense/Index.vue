<script setup lang="ts">
import Charts from "./Charts.vue";
import Categories from "./Categories.vue";
import Transactions from "./Transactions.vue";

const props = defineProps<{ type: "income" | "expense" }>();

const tabs = ["Charts", "Categories", "Transactions"];

const currentTab = ref();

function selectTab(event: Event | HTMLDivElement) {
  const tab: HTMLDivElement = event instanceof Event ? (event.target as HTMLDivElement) : event;

  const allTabs: HTMLDivElement[] = Array.from(document.querySelectorAll(".tabs__item"));
  allTabs.forEach((tab) => tab.classList.remove("selected"));
  tab.classList.add("selected");

  currentTab.value = tab.textContent;
}

onMounted(() => selectTab(document.querySelector(".tabs__item") as HTMLDivElement));
</script>

<template>
  <div class="tabs">
    <button v-for="tab in tabs" @click="selectTab($event)" class="tabs__item title-text">
      {{ tab }}
    </button>
  </div>

  <Charts :type="props.type" v-if="currentTab == 'Charts'" />
  <Categories :type="props.type" v-else-if="currentTab == 'Categories'" />
  <Transactions :type="props.type" v-else-if="currentTab == 'Transactions'" />
</template>

<style lang="scss" scoped>
.tabs {
  @apply flex w-fit gap-3 overflow-hidden rounded-xl bg-frame;

  &__item {
    @apply rounded-xl px-5 py-3;

    &.selected {
      @apply bg-main text-accent;
    }
  }
}
</style>
