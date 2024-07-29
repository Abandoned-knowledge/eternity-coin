export interface ICategoryItem {
  category_id?: number;
  label: string;
  color: string;
  type_id?: number;
}

export interface ITransactionItem {
  date: Date;
  value: number;
  categories?: {
    category_id: number;
    color: string;
    label: string;
    type_id: number;
  };
}

export interface IUser {
  user_id: number;
  email: string;
  password: string;
  name: string;
}

export interface IDonutItem {
  label: string;
  color: string;
  value: string;
}

export interface ILineItem {
  month: string;
  value: string;
}

export interface SelectDateType {
  start_date: string;
  end_date: string;
}
