import type { Component } from "vue";

export interface ITab {
  tabTitle: string;
  tabComponent: Component;
}

export interface ICategoryItem {
  title: string;
  color: string;
}

export interface IDonutItem {
  category_id: number,
  total_value: string,
}
