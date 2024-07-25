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
  label: string,
  total_value: string,
  color: string
}
