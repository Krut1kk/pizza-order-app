import { ICart } from "@/entities/cart";

export interface IPeopleForSplitPrice {
  name: string;
  id: string;
}

export interface IUser {
  cartItems: ICart[];
  peoplesForSplitPrice: IPeopleForSplitPrice[];
}

export interface UserStateSchema {
  user: IUser;
}
