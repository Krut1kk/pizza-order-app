"use client";
// next
import { useRouter } from "next/navigation";
// react
import { FC } from "react";
// redux
import { useDispatch, useSelector } from "react-redux";
// entities
import { getOrderById, orderActions } from "@/entities/order";
import { IOrder } from "@/entities/order";
// ui
import { Button } from "@/shared/ui/Button";
// constants
import { getOrdersRoute } from "@/shared/libs/constants/routes";
// styles
import styles from "./SingleOrderPayNowButton.module.scss";

interface SingleOrderPayNowButtonProps {
  id: IOrder["orderId"];
}

export const SingleOrderPayNowButton: FC<SingleOrderPayNowButtonProps> = ({
  id,
}) => {
  const dispatch = useDispatch();

  const order = useSelector(getOrderById(id));

  const { push } = useRouter();

  const onPayNowClick = () => {
    dispatch(
      orderActions.changeOrderStatus({ orderId: id, status: "received" })
    );
    push(getOrdersRoute());
  };

  switch (order?.status) {
    case "received": {
      return (
        <Button
          onClick={onPayNowClick}
          backgroundColor="green"
          disabled={true}
          maxWidth={"300px"}
        >
          Замовлення вже оплачено
        </Button>
      );
    }

    case "pending": {
      return (
        <Button
          onClick={onPayNowClick}
          backgroundColor="rose"
          maxWidth={"240px"}
        >
          Заплатити одразу
        </Button>
      );
    }

    case "rejected": {
      return (
        <Button
          onClick={onPayNowClick}
          backgroundColor="black"
          disabled={true}
          maxWidth={"300px"}
        >
          Замовлення вже відхилено
        </Button>
      );
    }
  }
};
