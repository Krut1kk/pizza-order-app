// redux
import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
// reducers
import { userReducer } from "@/entities/user";
import { orderReducer } from "@/entities/order";
// types
import type { StateSchema } from "./stateSchema";

export const createReduxStore = () => {
  const reducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    order: orderReducer,
  };

  const store = configureStore({
    reducer: reducers,
  });

  return store;
};
