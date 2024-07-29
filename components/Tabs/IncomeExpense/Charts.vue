<script setup lang="ts">
const props = defineProps<{ type: "income" | "expense" }>();
import type { IDonutItem, ILineItem, ITransactionItem, SelectDateType } from "~/app/interfaces/interfaces";
import formatDate, { changeDataByMonth, formatDateForDB } from "~/features/date/formatDate";


const { end, start } = changeDataByMonth(new Date().getMonth());
const { value: date } = ref<SelectDateType>({
  start_date: start,
  end_date: end,
});

const currDate = new Date();
const currMonth = ref(currDate.getMonth());

const test = ref(formatDate(new Date(), "yyyy-mm"));

function changeMonthPeriod(currentMonth: number) {
  const { start, end } = changeDataByMonth(currentMonth);

  date.start_date = start;
  date.end_date = end;
  formatDate(new Date(end), "yyyy-mm");
  test.value = formatDate(new Date(start), "yyyy-mm");
}

const rawDonutData = await $fetch<IDonutItem[]>(
  `/api/transactions/${props.type}/date_period/${date.start_date}/${date.end_date}/donut`,
);
let donutData = ref<IDonutItem[]>(rawDonutData);

const chartDountData = computed(() => {
  return {
    labels: donutData.value.map((el) => el.label),
    datasets: [
      {
        backgroundColor: donutData.value.map((el) => el.color),
        data: donutData.value.map((el) => Number(el.value)),
        hoverOffset: 15,
      },
    ],
  };
});

const rawLineData = await $fetch<ITransactionItem[]>(
  `/api/transactions/${props.type}/date_period/${date.start_date}/${date.end_date}`,
);
let lineData = ref<ITransactionItem[]>(rawLineData);

const chartLineData = computed(() => {
  return {
    labels: lineData.value.map((el) => formatDateForDB(new Date(el.date))),
    datasets: [
      {
        label: "income",
        backgroundColor: props.type == "income" ? "#28a61c" : "#e35151",
        borderColor: props.type == "income" ? "#28a61c" : "#e35151",
        data: lineData.value.map((el) => el.value),
        tension: 0.3,
      },
    ],
  };
});

watch(
  date,
  async () => {
    const rawDountData = await $fetch<IDonutItem[]>(
      `/api/transactions/${props.type}/date_period/${date.start_date}/${date.end_date}/donut`,
    );
    const rawLineData = await $fetch<ITransactionItem[]>(
      `/api/transactions/${props.type}/date_period/${date.start_date}/${date.end_date}`,
    );
    donutData.value = rawDountData;
    lineData.value = rawLineData;

    if (donutData.value.length <= 0) {
      donutData.value = [
        {
          label: "nothing",
          value: "1",
          color: "#00000",
        },
      ];
    }

    if (lineData.value.length <= 0) {
      lineData.value = [
        {
          date: formatDateForDB(new Date()),
          value: 1,
        },
      ];
    }

    chartDountData.value.labels = donutData.value.map((el) => el.label);
    chartDountData.value.datasets[0].data = donutData.value.map((el) => Number(el.value));
    chartDountData.value.datasets[0].backgroundColor = donutData.value.map((el) => el.color);

    chartLineData.value.labels = lineData.value.map((el) => formatDateForDB(new Date(el.date)));
    chartLineData.value.datasets[0].data = lineData.value.map((el) => el.value);
  },
  { immediate: true },
);
</script>

<template>
  <div class="flex items-center gap-5">
    <p class="title-text">{{ test }}</p>

    <div class="flex gap-2">
      <button @click="changeMonthPeriod(--currMonth)" class="button button_main title-text">prev</button>
      <button @click="changeMonthPeriod(++currMonth)" class="button button_main title-text">next</button>
    </div>
  </div>

  <div class="mt-5 flex gap-10">
    <div class="frame frame_chart">
      <ChartsDonutCanvas :data="chartDountData" />
    </div>
    <div class="frame frame_chart w-[70%]">
      <ChartsLineCanvas :data="chartLineData" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
