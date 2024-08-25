import { StateSchema } from "@/appRoot/config/store";

export const getOrderState = (state: StateSchema) => state.order;

export const getOrderById = (orderId: string) => (state: StateSchema) => {
  const orderItems = getOrderState(state).orderItems;

  return orderItems.find((order) => order.orderId === orderId);
};

export const getOrderRemainingPrice =
  (orderId: string) => (state: StateSchema) => {
    const order = getOrderById(orderId)(state);

    if (order) {
      const splitedPrice = order.peopleForSplitPrice.reduce((acc, item) => {
        return acc + item.splitedPrice;
      }, 0);

      const remainingPrice = order.totalPrice - splitedPrice;

      return remainingPrice;
    }

    return 0;
  };
