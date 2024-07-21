<template>
  <Doughnut :options="chartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
import { Doughnut } from "vue-chartjs";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, Tooltip, Legend, ArcElement, layouts } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

// const style = getComputedStyle(document.body);
// const whiteColor = style.getPropertyValue("--bg-color");
// const darkColor = style.getPropertyValue("--dark-color");
const whiteColor = "#ffffff";
const darkColor = "#000000";

const chartData = reactive({
  labels: ["Main Job", "Freelance"],
  datasets: [
    {
      backgroundColor: ["#91C499", "#EAD637"],
      data: [45333, 77666],
      hoverOffset: 15,
    },
  ],
});

const chartOptions = {
  plugins: {
    legend: {
      position: "bottom",
      align: "center",
      labels: {
        color: darkColor,
        font: {
          size: 14,
          family: "MPLUS",
        },
      },
    },
    datalabels: {
      color: whiteColor,
      font: {
        family: "MPLUS",
        size: 18,
      },
    },
  },
};
</script>
