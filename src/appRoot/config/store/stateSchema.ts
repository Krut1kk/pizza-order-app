// types
import { OrderStateSchema } from "@/entities/order";
import { UserStateSchema } from "@/entities/user";

export interface StateSchema {
  user: UserStateSchema;
  order: OrderStateSchema;
}
