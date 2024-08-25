"use client";
// react
import { FC, ReactNode } from "react";
// config
import { createReduxStore } from "../../config/store";
// redux
import { Provider } from "react-redux";

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};
