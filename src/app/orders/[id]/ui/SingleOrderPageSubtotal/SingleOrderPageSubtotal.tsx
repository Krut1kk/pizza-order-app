"use client";
// react
import { FC } from "react";
// redux
import { useSelector } from "react-redux";
// entities
import { getOrderById, IOrder } from "@/entities/order";
// utils
import { calculateSubtotalPrice } from "@/shared/libs/utils/calculateSubtotalPrice";
// styles
import styles from "./SingleOrderPageSubtotal.module.scss";
import { getOrderRemainingPrice } from "@/entities/order/model/selectors/orderSelectors";

interface SingleOrderPageSubtotalProps {
  id: IOrder["orderId"];
}

export const SingleOrderPageSubtotal: FC<SingleOrderPageSubtotalProps> = ({
  id,
}) => {
  const order = useSelector(getOrderById(id));

  const remainingPrice = useSelector(getOrderRemainingPrice(id));

  const subtotal = calculateSubtotalPrice(order?.orderedItems || []);

  return (
    <div className={styles.SingleOrderPageSubtotal}>
      Всього {subtotal} грн{" "}
      {remainingPrice !== subtotal && `(для вас ${remainingPrice})`}
    </div>
  );
};
