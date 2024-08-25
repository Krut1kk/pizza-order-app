// redux
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// libs
import { nanoid } from "nanoid";
// entities
import { ICart } from "@/entities/cart";
// types
import type { UserStateSchema, IPeopleForSplitPrice } from "../types/userTypes";

const initialState: UserStateSchema = {
  user: {
    cartItems: [],
    peoplesForSplitPrice: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ICart>) {
      const cartItem = action.payload;

      const currentCartItems = state.user.cartItems;

      const isItemAlreadyInCart = currentCartItems.find(
        (item) => item.id === cartItem.id
      );

      if (!isItemAlreadyInCart) {
        state.user.cartItems.push({ ...cartItem, count: 1 });
      }

      if (isItemAlreadyInCart) {
        state.user.cartItems = currentCartItems.map((item) => {
          return item.id === cartItem.id
            ? { ...item, count: item.count! + 1 }
            : item;
        });
      }
    },

    increaseItemCount(state, action: PayloadAction<ICart["id"]>) {
      const currentCartItems = state.user.cartItems;

      const itemsWithUpdatedCount = currentCartItems.map((item) => {
        if (item.id === action.payload) {
          const currentItemCount = item.count;

          return { ...item, count: currentItemCount! + 1 };
        }

        return item;
      });

      state.user.cartItems = itemsWithUpdatedCount;
    },

    decreaseItemCount(state, action: PayloadAction<ICart["id"]>) {
      const currentCartItems = state.user.cartItems;

      const itemsWithUpdatedCount = currentCartItems.map((item) => {
        if (item.id === action.payload) {
          const currentItemCount = item.count;

          if (currentItemCount! > 1) {
            return { ...item, count: currentItemCount! - 1 };
          }
        }

        return item;
      });

      state.user.cartItems = itemsWithUpdatedCount;
    },

    removeItemFromCart(state, action: PayloadAction<ICart["id"]>) {
      const currentCartItems = state.user.cartItems;

      const filteredCartItems = currentCartItems.filter(
        (item) => item.id !== action.payload
      );

      state.user.cartItems = filteredCartItems;
    },

    removeAllItems: (state) => {
      state.user.cartItems = [];
    },

    addPeopleForSplitPrice: (
      state,
      action: PayloadAction<Pick<IPeopleForSplitPrice, "name">>
    ) => {
      const peopleId = nanoid(6);

      state.user.peoplesForSplitPrice.push({
        id: peopleId,
        name: action.payload.name,
      });
    },

    removePeopleForSplitPrice: (
      state,
      action: PayloadAction<IPeopleForSplitPrice["id"]>
    ) => {
      state.user.peoplesForSplitPrice = state.user.peoplesForSplitPrice.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { actions: userActions, reducer: userReducer } = userSlice;
