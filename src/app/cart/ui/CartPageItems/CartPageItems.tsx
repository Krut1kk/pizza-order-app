"use client";
// react
import { FC } from "react";
// redux
import { useSelector } from "react-redux";
// widgets
import { EmptyProductsError } from "@/widgets/emptyProductsError";
// entities
import { CartItemList } from "@/entities/cart";
import { getUserState } from "@/entities/user";
// styles
import styles from "./CartPageItems.module.scss";

interface CartPageItemsProps {}

export const CartPageItems: FC<CartPageItemsProps> = ({}) => {
  const { user } = useSelector(getUserState);

  return user.cartItems.length ? (
    <CartItemList items={user.cartItems} />
  ) : (
    <EmptyProductsError
      contentContainerClassName={styles.cartProductsError}
      description="Ваша корзина порожня"
      title="Ми нічого не знайшли"
    />
  );
};
