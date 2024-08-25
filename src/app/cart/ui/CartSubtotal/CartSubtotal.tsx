"use client";
// react
import { FC } from "react";
// redux
import { useSelector } from "react-redux";
// entities
import { getUserState } from "@/entities/user";
// utils
import { calculateSubtotalPrice } from "@/shared/libs/utils/calculateSubtotalPrice";
// styles
import styles from "./CartSubtotal.module.scss";

interface CartSubtotalProps {}

export const CartSubtotal: FC<CartSubtotalProps> = ({}) => {
  const { user } = useSelector(getUserState);

  const subtotal = calculateSubtotalPrice(user.cartItems);

  return subtotal ? (
    <div className={styles.CartSubtotal}>Всього : {subtotal} грн</div>
  ) : null;
};
