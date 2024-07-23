// const style = getComputedStyle(document.body);
// const greyColor = style.getPropertyValue("--grey-color");
// const darkColor = style.getPropertyValue("--dark-color");

const whiteColor = "#ffffff";
const darkColor = "#000000";
const baseFamily = "MPLUS";

const legendFont = {
  size: 14,
  family: baseFamily,
};

const datalabelsFont = {
  size: 18,
  family: baseFamily,
};

const pluginsLegend = {
  position: "bottom",
  align: "center",
  labels: {
    color: darkColor,
    font: legendFont,
  },
};

export const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: pluginsLegend,
    datalabels: {
      color: whiteColor,
      font: datalabelsFont,
    },
  },
};

function axisStyle(props: { beginAtZero?: boolean } | null = null): object {
  return {
    ...props,
    ticks: {
      color: "grey",
      font: {
        family: baseFamily,
        size: 12,
      },
    },
  };
}
export const LineChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: pluginsLegend,
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: axisStyle(),
    y: axisStyle({ beginAtZero: true }),
  },
};
