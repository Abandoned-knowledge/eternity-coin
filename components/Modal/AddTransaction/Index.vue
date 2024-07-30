<script setup lang="ts">
import Form from "~/components/Forms/AddTransaction.vue";
const modal = ref<HTMLDialogElement | null>(null);
import type { ICategoryItem } from "~/app/interfaces/interfaces";

const { data: incomeCategories } = await useFetch<ICategoryItem[]>(`/api/categories/income`);
const { data: expenseCategories } = await useFetch<ICategoryItem[]>(`/api/categories/expense`);

const selTab = ref();

function selectTab(event: Event | HTMLDivElement) {
  let target: HTMLDivElement;

  target = event instanceof Event ? (event.target as HTMLDivElement) : event;

  const allTabs: HTMLDivElement[] = Array.from(document.querySelectorAll(".tabs__item"));
  allTabs.forEach((tab) => tab.classList.remove("selected"));
  target.classList.add("selected");
  selTab.value = target.textContent;
}

const tabItems = ["expense", "income"];

onMounted(() => {
  const tab = document.querySelector(".tabs__item") as HTMLDivElement;
  selectTab(tab);
});
</script>

<template>
  <div @click="modal?.showModal()" class="frame frame_accent frame_chart">
    <p class="title-text">Add Transaction</p>
    <PlusIcon class="h-16 w-16" />
  </div>

  <dialog ref="modal" class="modal">
    <div class="modal__inner">
      <button @click="modal?.close()" class="modal__close" />

      <div class="tabs">
        <div @click="selectTab($event)" v-for="tab in tabItems" class="tabs__item">{{ tab }}</div>
      </div>

      <Form v-if="selTab == 'income'" type="income" :categories="incomeCategories!" />
      <Form v-else type="expense" :categories="expenseCategories!" />
    </div>
  </dialog>
</template>

<style lang="scss" scoped>
.tabs {
  @apply flex w-full gap-3;

  &__item {
    @apply inline-block w-full cursor-pointer rounded-xl border border-main bg-frame-darked px-5 py-3 text-center capitalize;

    &.selected {
      @apply bg-accent font-bold;
    }
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
