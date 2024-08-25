import type { IDish } from "@/entities/dish";

export type ICart = Omit<IDish, "description" | "size"> & {
  count?: number;
};

export interface CartStateSchema {
  cartItems: ICart[];
}
