// redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// utils
import { calculateSubtotalPrice } from "@/shared/libs/utils/calculateSubtotalPrice";
// libs
import { nanoid } from "nanoid";
// types
import { IOrder, OrderStateSchema } from "../types/orderTypes";

const initialState: OrderStateSchema = {
  orderItems: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    createOrder: (
      state,
      action: PayloadAction<{
        id: IOrder["orderId"];
        items: IOrder["orderedItems"];
      }>
    ) => {
      const orderDate = new Date().toLocaleDateString();

      const orderTotalPrice = calculateSubtotalPrice(action.payload.items);

      state.orderItems.push({
        orderId: action.payload.id,
        orderedItems: action.payload.items,
        totalPrice: orderTotalPrice,
        status: "pending",
        date: orderDate,
        peopleForSplitPrice: [],
      });
    },

    changeOrderStatus: (
      state,
      action: PayloadAction<{
        orderId: IOrder["orderId"];
        status: IOrder["status"];
      }>
    ) => {
      const order = state.orderItems.find(
        (order) => order.orderId === action.payload.orderId
      );

      if (order) {
        order.status = action.payload.status;
      }
    },

    addPeopleForSplitPrice: (
      state,
      action: PayloadAction<{
        orderId: IOrder["orderId"];
        peopleForSplitPrice: IOrder["peopleForSplitPrice"][0];
      }>
    ) => {
      const orderId = action.payload.orderId;

      const peopleForSplitPrice = action.payload.peopleForSplitPrice;

      const order = state.orderItems.find((order) => order.orderId === orderId);

      if (order) {
        const isPeopleAlreadyAdded = order.peopleForSplitPrice.some(
          (person) => person.id === peopleForSplitPrice.id
        );

        if (!isPeopleAlreadyAdded) {
          order.peopleForSplitPrice.push(peopleForSplitPrice);
        }
      }
    },

    deletePeopleForSplitPrice: (
      state,
      action: PayloadAction<{
        orderId: IOrder["orderId"];
        peopleForSplitPriceId: IOrder["peopleForSplitPrice"][0]["id"];
      }>
    ) => {
      const orderId = action.payload.orderId;

      const peopleForSplitPriceId = action.payload.peopleForSplitPriceId;

      const order = state.orderItems.find((order) => order.orderId === orderId);

      if (order) {
        order.peopleForSplitPrice = order.peopleForSplitPrice.filter(
          (person) => person.id !== peopleForSplitPriceId
        );
      }
    },

    changePeopleSplitedPrice: (
      state,
      action: PayloadAction<{
        orderId: IOrder["orderId"];
        peopleForSplitPriceId: IOrder["peopleForSplitPrice"][0]["id"];
        newPrice: number;
      }>
    ) => {
      const orderId = action.payload.orderId;

      const order = state.orderItems.find((order) => order.orderId === orderId);

      if (order) {
        const peopleForSplitPriceId = action.payload.peopleForSplitPriceId;
        const newPrice = action.payload.newPrice;

        const person = order.peopleForSplitPrice.find(
          (person) => person.id === peopleForSplitPriceId
        );

        if (person) {
          person.splitedPrice = newPrice;
        }
      }
    },
  },
});

export const { actions: orderActions, reducer: orderReducer } = orderSlice;
