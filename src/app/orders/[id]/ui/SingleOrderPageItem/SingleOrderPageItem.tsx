"use client";
// react
import { FC } from "react";
// redux
import { useSelector } from "react-redux";
// widgets
import { EmptyProductsError } from "@/widgets/emptyProductsError";
// entities
import { getOrderById } from "@/entities/order";
import { CartItemList } from "@/entities/cart";
// styles
import styles from "./SingleOrderPageItem.module.scss";

interface SingleOrderPageItemProps {
  id: string;
}

export const SingleOrderPageItem: FC<SingleOrderPageItemProps> = ({ id }) => {
  const order = useSelector(getOrderById(id));

  if (!order) {
    return (
      <EmptyProductsError
        contentContainerClassName={styles.EmptyProductsError}
        title="Замовлення не знайдено"
        description="Спробуйте замовити ще раз"
      />
    );
  }

  return (
    <div className={styles.SingleOrderPageItem}>
      <CartItemList readonly={true} items={order?.orderedItems || []} />
    </div>
  );
};
