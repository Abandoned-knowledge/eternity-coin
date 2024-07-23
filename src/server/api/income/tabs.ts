import type { ITab } from "~/app/interfaces/interfaces";

export default defineEventHandler(() => {
  return [
    {
      tabTitle: "Charts",
      tabComponent: "Charts",
    },
    {
      tabTitle: "Categories",
      tabComponent: "Categories",
    },
    {
      tabTitle: "Transactions",
      tabComponent: "Transactions",
    },
  ];
});
