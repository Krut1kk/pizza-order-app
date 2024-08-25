"use client";
// next
import { useRouter } from "next/navigation";
// react
import { FC } from "react";
// redux
import { useDispatch } from "react-redux";
// entities
import { IOrder, orderActions } from "@/entities/order";
// constants
import { getOrdersRoute } from "@/shared/libs/constants/routes";
// ui
import { Button } from "@/shared/ui/Button";

interface SingleOrderPageCancelButtonProps {
  id: IOrder["orderId"];
}

export const SingleOrderPageCancelButton: FC<
  SingleOrderPageCancelButtonProps
> = ({ id }) => {
  const dispatch = useDispatch();

  const { push } = useRouter();

  const onCancelClick = () => {
    dispatch(
      orderActions.changeOrderStatus({ orderId: id, status: "rejected" })
    );
    push(getOrdersRoute());
  };

  return (
    <Button onClick={onCancelClick} backgroundColor="black">
      Відмінити замовлення
    </Button>
  );
};
