"use client";
// react
import { FC } from "react";
// redux
import { useSelector } from "react-redux";
// widgets
import { EmptyProductsError } from "@/widgets/emptyProductsError";
// entities
import { getOrderState } from "@/entities/order";
import { OrderItemList } from "@/entities/order";
// styles
import styles from "./OrderPageItems.module.scss";

interface OrderPageItemsProps {}

export const OrderPageItems: FC<OrderPageItemsProps> = ({}) => {
  const { orderItems } = useSelector(getOrderState);

  return orderItems.length ? (
    <OrderItemList items={orderItems} />
  ) : (
    <EmptyProductsError
      contentContainerClassName={styles.orderProductsError}
      description="У вас немає активних замовлень"
      title="Ми нічого не знайшли"
    />
  );
};
