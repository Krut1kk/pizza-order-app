"use client";
// react
import { FC } from "react";
// redux
import { useSelector } from "react-redux";
// selectors
import { getOrderById } from "../../model/selectors/orderSelectors";
// ui
import { OrderPeopleForSplitPriceItem } from "../OrderPeopleForSplitPriceItem/OrderPeopleForSplitPriceItem";
// types
import { IOrder } from "../../model/types/orderTypes";
// styles
import styles from "./OrderPeopleForSplitPriceItemList.module.scss";

interface OrderPeopleForSplitPriceItemListProps {
  orderId: IOrder["orderId"];
}

export const OrderPeopleForSplitPriceItemList: FC<
  OrderPeopleForSplitPriceItemListProps
> = ({ orderId }) => {
  const order = useSelector(getOrderById(orderId));

  return (
    <div className={styles.OrderPeopleForSplitPriceItemList}>
      {order?.peopleForSplitPrice.map(({ id, name, splitedPrice }) => (
        <OrderPeopleForSplitPriceItem
          key={id}
          id={id}
          name={name}
          orderId={orderId}
          splitedPrice={splitedPrice}
        />
      ))}
    </div>
  );
};
