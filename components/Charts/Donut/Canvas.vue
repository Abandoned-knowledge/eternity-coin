<template>
  <Doughnut ref="donut_chart" :options="doughnutChartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart, Tooltip, Legend, ArcElement, layouts } from "chart.js";
Chart.register(ArcElement, Tooltip, Legend, ChartDataLabels);

import { type IDonutItem } from "~/app/interfaces/interfaces";
import { doughnutChartOptions } from "~/features/charts/options";
const props = defineProps<{ data: IDonutItem[] }>();

const chartData = computed(() => {
  return {
    labels: props.data.map((el) => el.label),
    datasets: [
      {
        backgroundColor: props.data.map((el) => el.color),
        data: props.data.map((el) => Number(el.total_value)),
        hoverOffset: 15,
      },
    ],
  };
});

const donut_chart = ref(null);

watch(
  () => props.data,
  () => {
    chartData.value.labels = props.data.map((el) => el.label);
    chartData.value.datasets[0].data = props.data.map((el) => Number(el.total_value));
    chartData.value.datasets[0].backgroundColor = props.data.map((el) => el.color);
  },
  { immediate: true },
);
</script>

<!-- <script setup>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto'
import axios from 'axios'
import _ from 'lodash'

const search = ref('chart')
const perPage = ref(10)
const perPages = ref([5, 10, 15, 20])
const chart = ref(null)
const labels = ref([])
const stars = ref([])
const chartTypes = ['bar', 'line', 'bubble']
const chartType = ref('bar')
const chartColor = ref('crimson')
const chartColors = ['crimson', 'teal', 'royalblue']
const loading = ref(false)

const initChart = () => {
  chart.value = Vue.markRaw(new Chart(document.getElementById('chart'), {
    type: chartType.value,
    data: {
      labels: [],
      datasets: [{
        label: 'Repos Stars',
        backgroundColor: 'crimson',
        borderColor: 'crimson',
        data: [],
        cubicInterpolationMode: 'monotone',
        fill: true
      }]
    },
    options: {
      responsive: true,
      tooltips: {
        mode: 'index'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }))
}

const onChangeType = () => {
  chart.value.config.type = chartType.value
  chart.value.update()
}

const onChangeColor = () => {
  chart.value.data.datasets[0].backgroundColor = chartColor.value
  chart.value.data.datasets[0].borderColor = chartColor.value
  chart.value.update()
}

const onChangePerPage = async () => {
  if (!search.value) return
  loading.value = true
  await fetchRepos()
  updateChart()
  loading.value = false
}

const updateChart = () => {
  chart.value.data.labels = labels.value
  chart.value.data.datasets[0].data = stars.value
  chart.value.update()
}

const fetchRepos = async () => {
  const response = await axios.get(`https://api.github.com/search/repositories?q=${search.value}&per_page=${perPage.value}`)
  labels.value = response.data.items.map(item => item.full_name)
  stars.value = response.data.items.map(item => item.stargazers_count)
}

const onSearch = _.debounce(async () => {
  if (!search.value) return
  loading.value = true
  await fetchRepos()
  updateChart()
  loading.value = false
}, 1000)

onMounted(async () => {
  initChart()
  await fetchRepos()
  updateChart()
})

watch([search, perPage], onSearch)
</script> -->
