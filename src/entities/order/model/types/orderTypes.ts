import { ICart } from "@/entities/cart";
import { IPeopleForSplitPrice } from "@/entities/user";

export interface IOrderPeopleForSpitPrice extends IPeopleForSplitPrice {
  splitedPrice: number;
}

export interface IOrder {
  orderId: string;
  orderedItems: ICart[];
  totalPrice: number;
  status: "received" | "pending" | "rejected" | null;
  date: string;
  peopleForSplitPrice: IOrderPeopleForSpitPrice[];
}

export interface OrderStateSchema {
  orderItems: IOrder[];
}
