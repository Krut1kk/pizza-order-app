// react
import { FC } from "react";
// ui
import { OrderItem } from "../OrderItem/OrderItem";
// types
import type { IOrder } from "../../model/types/orderTypes";
// styles
import styles from "./OrderItemList.module.scss";

interface OrderItemListProps {
  items: IOrder[];
}

export const OrderItemList: FC<OrderItemListProps> = ({ items }) => {
  return (
    <div className={styles.OrderItemList}>
      {items.map(
        ({
          orderId,
          orderedItems,
          totalPrice,
          date,
          status,
          peopleForSplitPrice,
        }) => (
          <OrderItem
            key={orderId}
            peopleForSplitPrice={peopleForSplitPrice}
            orderId={orderId}
            orderedItems={orderedItems}
            date={date}
            status={status}
            totalPrice={totalPrice}
          />
        )
      )}
    </div>
  );
};
