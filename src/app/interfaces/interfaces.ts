import type { Component } from "vue";

export interface ITab {
  tabTitle: string;
  tabComponent: Component;
}

export interface ICategoryItem {
  title: string;
  color: string;
}
