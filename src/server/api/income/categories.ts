import { type ICategoryItem } from "~/app/interfaces/interfaces";

export default defineEventHandler(() => {
  const api: ICategoryItem[] = [
    {
      title: "Maroon",
      color: "#df6f3b",
    },
    {
      title: "Green",
      color: "#dce2a8",
    },
    {
      title: "Pink",
      color: "#6a61d4",
    },
    {
      title: "Violet",
      color: "#62c6fe",
    },
    {
      title: "Teal",
      color: "#d7d7b0",
    },
    {
      title: "Teal",
      color: "#fbc67e",
    },
    {
      title: "Puce",
      color: "#fa8dd0",
    },
    {
      title: "Aquamarine",
      color: "#3f4d91",
    },
    {
      title: "Crimson",
      color: "#08dbf7",
    },
    {
      title: "Indigo",
      color: "#c7db57",
    },
  ];

  return api;
});
