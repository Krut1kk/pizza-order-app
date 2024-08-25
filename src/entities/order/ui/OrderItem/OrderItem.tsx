// next
import Link from "next/link";
// react
import { FC, useMemo } from "react";
// libs
import clsx from "clsx";
import { getStatusOrderText } from "../../libs/helpers/getStatusOrderText";
// shared
import { getSingleOrderRoute } from "@/shared/libs/constants/routes";
// types
import { IOrder } from "../../model/types/orderTypes";
// styles
import styles from "./OrderItem.module.scss";

interface OrderItemProps extends IOrder {}

export const OrderItem: FC<OrderItemProps> = ({
  status,
  orderId,
  orderedItems,
  totalPrice,
  date,
}) => {
  const orderStatusText = getStatusOrderText(status);

  const orderImages = useMemo(
    () =>
      orderedItems
        .slice(0, 3)
        .map((item) => (
          <img src={item.img} alt="" key={item.id} className={styles.image} />
        )),
    []
  );

  return (
    <Link href={getSingleOrderRoute(orderId)} className={styles.OrderItem}>
      <div className={styles.title}>Особистий кабінет</div>
      <div className={styles.info}>
        № {orderId} від {date}
      </div>
      <div
        className={clsx({
          [styles.statusButtonReceived]: status === "received",
          [styles.statusButtonPending]: status === "pending",
          [styles.statusButtonRejected]: status === "rejected",
        })}
      >
        {orderStatusText}
      </div>
      <div className={styles.details}>
        <div className={styles.imageContainer}>{orderImages}</div>
        <div className={styles.price}>{totalPrice} грн</div>
      </div>
    </Link>
  );
};
