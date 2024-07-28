import type { Component } from "vue";

export interface ITab {
  tabTitle: string;
  tabComponent: Component;
}

export interface ICategoryItem {
  category_id: number;
  label: string;
  color: string;
}

export interface IDonutItem {
  label: string;
  total_value: string;
  color: string;
}

export interface ILineItem {
  month_name: string;
  total_value: string;
}

export interface IUser {
  user_id: number;
  email: string;
  password: string;
  name: string;
}

export interface ITransactionItem {
  label: string;
  value: number;
  date: Date;
  transaction_type_id?: number;
}
